type CardProps = {
  name: string;
  description: string;
  challengeLink: string;
  url: string;
};

export default function Card({
  name,
  description,
  challengeLink,
  url,
}: CardProps) {
  return (
    <article className="border-4 border-gray-400  rounded-xl p-6 flex flex-col gap-4 text-gray-400">
      <h2 className="text-2xl uppercase">{name}</h2>

      <a
        className="group block overflow-hidden rounded-lg"
        href={url}
        target="_blank"
      >
        <img
          src="/desktop-design.jpg"
          alt={`An image of the ${name} website`}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </a>

      <a className="" href={`${challengeLink}`}>
        {description}
      </a>
    </article>
  );
}
