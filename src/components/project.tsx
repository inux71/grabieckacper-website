import Link from "next/link";
import Technology from "./technology";

export default function Project({
  title,
  description,
  technologies,
  url,
}: {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center w-96 h-96 p-1 m-1 rounded hover:scale-105 hover:cursor-default">
      <div className="flex flex-col justify-center items-center h-1/4">
        <h3 className="text-2xl font-extrabold">{title}</h3>
      </div>

      <div className="flex flex-col justify-start items-center h-1/4">
        <p className="italic text-center">{description}</p>
      </div>

      <div className="flex flex-wrap justify-center items-start h-1/4">
        {technologies.map((technology: string, index: number) => {
          return <Technology key={index} name={technology} />;
        })}
      </div>

      {url && (
        <Link href={url} target="_blank" className="hover:font-extrabold h-1/4">
          {"[view on github]"}
        </Link>
      )}
    </div>
  );
}
