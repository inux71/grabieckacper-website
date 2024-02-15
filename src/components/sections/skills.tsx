import { FaMobileAlt, FaServer } from "react-icons/fa";
import Skill from "../skill";
import { FaCode } from "react-icons/fa6";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center"
    >
      <Skill
        title="Web development"
        icon={FaCode}
        description={
          <p className="text-center">
            Creating web applications using{" "}
            {<span className="text-react">{`React`}</span>} and{" "}
            {<span className="text-typescript">TypeScript</span>}.
          </p>
        }
      />

      <Skill
        title="Mobile development"
        icon={FaMobileAlt}
        description={
          <p className="text-center">
            Creating mobile applications for Android in{" "}
            {<span className="text-kotlin">Kotlin</span>} and iOS in{" "}
            {<span className="text-swift">Swift</span>}.
          </p>
        }
      />

      <Skill
        title="Backend development"
        icon={FaServer}
        description={
          <p className="text-center">
            Creating server applications using{" "}
            {<span className="text-spring">Spring Boot</span>} and{" "}
            {<span className="text-dotnet">ASP.NET Core</span>}.
          </p>
        }
      />
    </section>
  );
}
