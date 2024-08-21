import Company from "../company";

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center min-h-screen w-full"
    >
      <Company
        position="Full-stack developer"
        period={["October 2023", "December 2023"]}
        company="SkyNow"
        description="Creating web applications and REST API interfaces during 3 months long internship."
        technologies={[
          "Java",
          "Kotlin",
          "Spring Boot",
          "JavaScript",
          "React",
          "Docker",
        ]}
      />

      <Company
        position=".NET Developer"
        period={["July 2023", "September 2023"]}
        company="POL-EKO"
        description="Creating web application and REST-API interface for .NET platform during 3 months long internship."
        technologies={[
          "C#",
          ".NET",
          "ASP.NET Core",
          "Entity Framework Core",
          "Blazor",
          "PostgreSQL",
        ]}
      />

      <Company
        position="Bachelor of Engineering in Computer Science"
        period={["October 2020", "January 2024"]}
        company="Politechnika Śląska"
        description="Bachelor of Engineering in Computer Science specialized in mobile apps programming."
        technologies={["C++", "C#", "Java", "Python", "Kotlin", "Swift"]}
      />
    </section>
  );
}
