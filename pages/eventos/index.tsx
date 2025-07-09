export default function Eventos() {
  const eventos = ['Corrida SP', 'Casamento Julia', 'Feira Fotográfica'];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Eventos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eventos.map((e, i) => (
          <a key={i} href={"/eventos/" + e.replace(/ /g, '-').toLowerCase()} className="bg-white shadow rounded-lg p-6 hover:shadow-xl hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold mb-2">{e}</h2>
            <p className="text-sm text-gray-500">Clique para ver as fotos</p>
          </a>
        ))}
      </div>
    </section>
  );
}
