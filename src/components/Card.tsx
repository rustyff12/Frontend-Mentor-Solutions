type CardProps = {
  name: string;
  description: string;
  challengeLink: string;
  url: string;
  image?: string;
  index: number;
};

export default function Card({
  name,
  description,
  challengeLink,
  url,
  image,
  index,
}: CardProps) {
  const lgGradients = [
    "from-blue-500 to-indigo-500",
    "from-violet-500 to-purple-500",
    "from-fuchsia-500 to-pink-500",
  ];
  const mdGradients = [
    "from-blue-500 to-violet-500",
    "from-purple-500 to-pink-500",
  ];
  const lgGradient = lgGradients[index % lgGradients.length];
  const mdGradient = mdGradients[index % 2];

  return (
    <article
      className={`p-[4px] rounded-xl bg-gradient-to-r  from-blue-500 to-pink-500 md:${mdGradient} lg:${lgGradient}`}
    >
      <div
        className={`rounded-xl bg-zinc-950 p-6 grid grid-cols-1 grid-rows-[80px_auto_auto_auto_auto] gap-2 text-gray-200 h-full `}
      >
        <div className="row-start-1 row-end-2 flex items-start">
          <h2 className="text-3xl uppercase">{name}</h2>
        </div>
        <div className="row-start-2 row-end-4">
          <a
            className="group block overflow-hidden rounded-lg"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image || "desktop-design.jpg"}
              alt={`An image of the ${name} website`}
              className="transition-transform duration-300 group-hover:scale-110 "
            />
          </a>
        </div>
        <div className="row-start-4 row-end-6">
          <a href={challengeLink}>{description}</a>
        </div>
      </div>
    </article>
  );
}
