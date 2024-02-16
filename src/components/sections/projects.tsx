import Project from "../project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-wrap justify-center items-center"
    >
      <Project
        title="QRestaurant"
        description="Bachelor project which represents order management system using QR codes for restaurants."
        technologies={[
          "Java",
          "Spring Boot",
          "TypeScript",
          "React",
          "React Native",
          "Docker",
          "Kafka",
        ]}
        url="https://github.com/teamqr/qrestaurant"
      />

      <Project
        title='"Big In Japan"'
        description="A mobile to-do list application for android and iOS."
        technologies={[
          "Java",
          "Spring Boot",
          "TypeScript",
          "React Native",
          "Docker",
        ]}
        url="https://github.com/Pichi00/kanbanTable"
      />

      <Project
        title="LibGame"
        description="An android application which allows you to manage games you play/want to play."
        technologies={["Kotlin", "Jetpack Compose", "Android", "Firebase"]}
        url="https://github.com/Inux71/lib-game"
      />
    </section>
  );
}
