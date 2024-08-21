import Technology from "./technology";

export default function Company({
  position,
  period,
  company,
  description,
  technologies,
}: {
  position: string;
  period: string[];
  company: string;
  description: string;
  technologies: string[];
}) {
  return (
    <div className="flex flex-col justify-center items-start w-4/5 my-4">
      <h2 className="text-3xl font-bold">{position}</h2>
      <h6 className="text-sm">
        {period[0]} - {period[1]}
      </h6>

      <h5 className="text-lg my-2">{company}</h5>

      <p>{description}</p>

      <div className="flex flex-wrap justify-start items-center w-full my-4">
        {technologies.map((technology, index) => (
          <Technology key={index} name={technology} />
        ))}
      </div>
    </div>
  );
}
