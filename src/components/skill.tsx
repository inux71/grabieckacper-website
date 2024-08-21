import { IconType } from "react-icons";

export default function Skill({
  title,
  icon: Icon,
  description,
}: {
  title: string;
  icon: IconType;
  description: JSX.Element;
}) {
  return (
    <div className="flex flex-col justify-center items-center w-96 lg:h-96 m-4 lg:m-1 p-1 hover:scale-105 hover:cursor-default">
      <div className="flex flex-col justify-end items-center h-1/2 mb-1">
        <Icon size={36} />
        <h5 className="text-lg font-extrabold mt-2">{title}</h5>
      </div>

      <div className="flex flex-col justify-start items-center h-1/2 mt-1">
        {description}
      </div>
    </div>
  );
}
