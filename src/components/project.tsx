import Image from "next/image";
import Technology from "./technology";

export default function Project({
  title,
  description,
  technologies,
  images,
  links,
  reverse,
}: {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  links?: Record<string, string>;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex ${
        reverse === true ? "flex-row-reverse" : "flex-row"
      } justify-center items-center w-4/5 min-h-screen`}
    >
      <div className="flex flex-col justify-center items-center w-1/2 mx-4">
        <h2 className="text-3xl font-bold">{title}</h2>

        <br></br>

        <p>
          {description.split("\n").map((line, index) => (
            <span key={index}>
              {line} <br></br>
            </span>
          ))}
        </p>

        <br></br>

        <div className="flex flex-wrap justify-start items-center w-full">
          {technologies.map((technology, index) => {
            return <Technology key={index} name={technology} />;
          })}
        </div>

        <br></br>

        <div className="flex flex-col justify-center items-start w-full">
          {links !== undefined
            ? Object.entries(links).map(([key, value], index) => (
                <a key={index} href={value} target="_blank">
                  [{key}]
                </a>
              ))
            : null}
        </div>
      </div>

      <div className="flex justify-start items-center w-1/2 overflow-x-scroll mx-4 no-scrollbar">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="app image"
            width={300}
            height={300}
            className="px-4"
          />
        ))}
      </div>
    </div>
  );
}
