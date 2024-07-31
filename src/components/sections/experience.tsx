import Work from "../work";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <Work
        position="Full-stack developer"
        company="SkyNow"
        period={["October 2023", "December 2023"]}
        description="Editing existing web applications and REST-API interfaces during 3 months long internship."
        technologies={["Java", "Spring Boot", "JavaScript", "React", "Docker"]}
      />

      <Work
        position=".NET developer"
        company="POL-EKO"
        period={["July 2023", "September 2023"]}
        description="Creating web application and REST-API interface for .NET platform during 3 months long internship."
        technologies={[
          "C#",
          "ASP.NET Core",
          "Entity Framework Core",
          "Blazor",
          "PostgreSQL",
        ]}
      />
    </section>
  );
}
