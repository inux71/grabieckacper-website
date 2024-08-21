import { FaMobileAlt, FaServer } from "react-icons/fa";
import Skill from "../skill";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center"
    >
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
