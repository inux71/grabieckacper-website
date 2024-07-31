import Work from "../work";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <Work
        position="Bachelor of Engineering in Computer Science"
        company="Politechnika Śląska"
        period={["October 2020", "January 2024"]}
        description="Programming mobile apps for android & iOS."
        technologies={[
          "Android",
          "Kotlin",
          "Jetpack Compose",
          "iOS",
          "Swift",
          "SwiftUI",
        ]}
      />
    </section>
  );
}
