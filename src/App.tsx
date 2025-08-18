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
    />
  ));
  return (
    <main className="min-h-screen bg-zinc-900 p-8 md:flex md:justify-center md:p-16 ">
      <header className="text-center mb-8">
        <h1 className="text-gray-400 text-4xl">Frontend Mentor Challenges</h1>
      </header>
      <section className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:max-w-[1600px]">
        {cardElements}
      </section>
    </main>
  );
}

export default App;
