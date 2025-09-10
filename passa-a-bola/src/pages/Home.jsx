// src/pages/Home.jsx
function Home() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/futebol.jpg')" }} // substitua pela sua imagem
    >
      <div className="bg-black bg-opacity-40 p-8 rounded-lg">
        <h2 className="text-white text-5xl font-extrabold">
          O FUTEBOL PELAS MULHERES.
        </h2>
      </div>
    </section>
  );
}

export default Home;
