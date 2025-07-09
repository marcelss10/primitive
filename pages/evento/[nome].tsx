import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import PhotoCard from '../../components/PhotoCard';

export const dynamic = 'force-dynamic'; // impede o erro no build

export default function Evento() {
  const router = useRouter();
  const { nome } = router.query as { nome: string };
  const [fotos, setFotos] = useState<string[]>([]);

  useEffect(() => {
    if (!nome) return;
    supabase.storage
      .from('fotos')
      .list(nome, { limit: 100 })
      .then(async ({ data }) => {
        if (data) {
          const urls = await Promise.all(
            data.map((f) =>
              supabase.storage.from('fotos').getPublicUrl(`${nome}/${f.name}`).data.publicUrl
            )
          );
          setFotos(urls);
        }
      });
  }, [nome]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
          Fotos do evento: <span className="text-blue-400">{nome}</span>
        </h1>

        {fotos.length === 0 ? (
          <p className="text-lg text-gray-300">Nenhuma foto encontrada para este evento.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {fotos.map((src, i) => (
              <PhotoCard key={i} src={src} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
