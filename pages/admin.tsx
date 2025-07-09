import { useState } from 'react';

export default function Admin() {
  const [nomeEvento, setNomeEvento] = useState('');
  const [fotos, setFotos] = useState<FileList | null>(null);

  const handleUpload = () => {
    alert("Simulação de envio de fotos para Supabase");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white flex flex-col items-center justify-center px-6">
      <div className="text-4xl font-bold mb-8 text-center">Ocinematico</div>
      <div className="bg-black bg-opacity-30 p-10 rounded-lg shadow-lg w-full max-w-xl text-center space-y-6">
        <h1 className="text-2xl font-semibold">Área Administrativa</h1>
        <input
          type="text"
          placeholder="Nome do evento"
          value={nomeEvento}
          onChange={(e) => setNomeEvento(e.target.value)}
          className="w-full p-3 rounded text-black"
        />
        <input
          type="file"
          multiple
          onChange={(e) => setFotos(e.target.files)}
          className="w-full"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-lg"
        >
          Enviar Fotos
        </button>
        <a
          href="/"
          className="inline-block bg-white text-black font-semibold mt-4 px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          Ir ao site
        </a>
      </div>
      <footer className="text-xs text-gray-400 mt-12">
        © 2025 Ocinematico. Todos os direitos reservados.
      </footer>
    </section>
  );
}
