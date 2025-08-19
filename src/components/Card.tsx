type CardProps = {
  name: string;
  description: string;
  challengeLink: string;
  url: string;
  image?: string;
};

export default function Card({
  name,
  description,
  challengeLink,
  url,
  image,
}: CardProps) {
  return (
    <article className="border-4 border-gray-200 rounded-xl p-6 grid grid-cols-1 grid-rows-[80px_auto_auto_auto_auto] gap-2 text-gray-200">
      <div className="row-start-1 row-end-2 flex items-start">
        <h2 className="text-2xl uppercase">{name}</h2>
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
    </article>
  );
}
