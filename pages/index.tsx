import Hero from '../components/Hero';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Top buttons */}
      <div className="flex justify-end gap-4 p-4 bg-black shadow text-sm font-medium">
        <button className="bg-blue-600 text-white px-5 py-2 rounded hover:scale-105 transition">Preciso de um fotógrafo</button>
      </div>

      <section className="bg-gradient-to-r from-blue-600 to-black text-white text-center py-24 px-6">
        <h1 className="text-7xl md:text-8xl font-extrabold mb-4 tracking-wide bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 text-transparent bg-clip-text animate-pulse drop-shadow-lg">
          OCINEMATICO
        </h1>
        <p className="text-xl md:text-2xl">Sua plataforma de fotos de eventos</p>
      </section>

      {/* Busca evento */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Participou de um evento?</h2>
        <p className="text-xl mb-6">Busque aqui suas fotos.</p>
        <input
          type="text"
          placeholder="Digite aqui o nome do evento..."
          className="w-full md:w-1/2 p-3 border rounded text-black mb-4"
        />
        <br />
        <button
          onClick={() => router.push('/eventos')}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:scale-105 transition"
        >
          Buscar
        </button>
      </section>

      {/* Eventos por categoria */}
      <section className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-10">Eventos por categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-white font-semibold max-w-4xl mx-auto">
          {['Corrida', 'Ciclismo', 'Motor', 'Futebol', 'Treinos', 'Outros'].map((cat) => (
            <button
              key={cat}
              className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition rounded p-6"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-black py-20 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de uma sessão fotográfica?</h2>
          <p className="mb-6">
            Você está precisando de fotografia para melhorar as vendas do seu negócio ou quer registrar um momento especial? No Ocinematico Serviços, você solicita um trabalho - fotos do seu cardápio, dos seus produtos ou de algum evento - e nossa base de fotógrafos irá te atender.
          </p>
          <p className="mb-6">Aqui, nos adaptamos ao seu orçamento.</p>
          <a
            href="/faca-seu-evento"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-lg transition"
          >
            Solicitar serviço
          </a>
        </div>
      </section>

      {/* Ocine chatbot flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showChat ? (
          <button
            onClick={() => setShowChat(true)}
            className="bg-white p-3 rounded-full shadow-lg text-2xl hover:scale-105 transition"
            title="Falar com Ocine"
          >
            🤖
          </button>
        ) : (
          <div className="bg-white text-black p-4 rounded-lg shadow-xl w-80">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Ocine 🤖</h3>
              <button onClick={() => setShowChat(false)} className="text-gray-500 hover:text-black">✖</button>
            </div>
            <p className="text-sm mb-4">Olá! Eu sou o Ocine 🤖 Como posso ajudar?</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => router.push('/eventos')}
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Ir para fotos
              </button>
              <button
                onClick={() => alert('Entre em contato pelo email: contato@ocinematico.com')}
                className="bg-gray-300 text-black py-2 rounded hover:bg-gray-400"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8">
        <p>© 2025 Ocinematico. Todos os direitos reservados.</p>
        <p className="text-xs text-gray-400 mt-2">Desenvolvido por Marcel Ambrosio</p>
      </footer>
    </>
  );
}