import Card from "./components/Card";
import { linkData } from "./data/data";
function App() {
  const cardElements = linkData.map((item) => (
    <Card
      key={item.id}
      name={item.name}
      description={item.description}
      challengeLink={item.challengeLink}
      url={item.url}
      image={item.image}
      index={item.id}
    />
  ));
  return (
    <main className="min-h-screen bg-zinc-950 p-8 md:flex md:flex-col md:justify-center md:p-16 ">
      <header className="text-center mb-8">
        <h1 className="text-gray-200 text-3xl md:text-4xl lg:text-6xl flex flex-col items-center font-bold gap-2 font-oswald">
          <span className="underline">Frontend Mentor Challenge</span>
          <span className="bg-linear-to-r from-blue-500 to-pink-700  bg-clip-text text-transparent w-32 md:w-36 lg:w-58">
            Soultions
          </span>
        </h1>
      </header>
      <section className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3  xl:max-w-[1600px]">
        {cardElements}
      </section>
    </main>
  );
}

export default App;
