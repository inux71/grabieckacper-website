import Technology from "./technology";

export default function Work({
  position,
  company,
  period,
  description,
  technologies,
}: {
  position: string;
  company: string;
  period: [string, string];
  description: string;
  technologies: string[];
}) {
  return (
    <div className="flex flex-col justify-center items-start w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 m-1 p-1 hover:scale-105 hover:cursor-default">
      <>
        <h3 className="text-2xl font-extrabold">{position}</h3>
        <p className="text-xs text-[#777]">{`${period[0]} - ${period[1]}`}</p>
        <h5 className="text-lg py-2">{company}</h5>
      </>

      <p className="italic">{description}</p>

      <div className="flex flex-wrap justify-start items-start pt-2">
        {technologies.map((technology: string, index: number) => {
          return <Technology key={index} name={technology} />;
        })}
      </div>
    </div>
  );
}
