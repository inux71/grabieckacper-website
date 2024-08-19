import Project from "../project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center min-h-screen w-full"
    >
      <Project
        title="QRestaurant"
        description={`Create 3 server applications for bachelor project which represents order management system using QR codes for restaurants. Server part contains:\n- API gateway;\n- mobile app microservice;\n- web app microservice;\nWhole system includes:\n- mobile app for restaurant clients for creating orders;\n- web app for restaurants for order management;\n- 3 server applications;`}
        technologies={[
          "Java",
          "Spring Boot",
          "Kafka",
          "Websocket",
          "PostgreSQL",
          "Docker",
        ]}
        images={[]}
        links={{ "source code": "https://github.com/teamqr/qrestaurant" }}
      />

      <Project
        title={`"Big In Japan"`}
        description={`Create a server application for mobile to-do list app. It allows you to:\n- create/edit/delete tables/task groups/tasks;\n- add another users to specific table;\n- add tags to tasks;\n- export table to PDF;`}
        technologies={["Java", "Spring Boot", "Docker"]}
        images={[
          "/images/projects/big_in_japan/welcome_view.png",
          "/images/projects/big_in_japan/register_view.png",
          "/images/projects/big_in_japan/login_view.png",
          "/images/projects/big_in_japan/table_list_view.png",
          "/images/projects/big_in_japan/table_view.png",
          "/images/projects/big_in_japan/table_view_2.png",
          "/images/projects/big_in_japan/edit_task_view.png",
        ]}
        links={{
          "source code": "https://github.com/Pichi00/kanbanTable",
        }}
        reverse
      />

      <Project
        title="LibGame"
        description="A mobile application which allows you to manage games you play or played. You can search the game and add it to your list."
        technologies={[
          "Kotlin",
          "Jetpack Compose",
          "Swift",
          "SwiftUI",
          "Firebase",
        ]}
        images={[
          "/images/projects/libgame/android/login_view.png",
          "/images/projects/libgame/android/game_list_view.png",
          "/images/projects/libgame/android/add_game_view.png",
          "/images/projects/libgame/ios/login_view.png",
          "/images/projects/libgame/ios/game_list_view.png",
          "/images/projects/libgame/ios/add_game_view.png",
        ]}
        links={{
          "android source code": "https://github.com/inux71/lib-game",
          "iOS source code": "https://github.com/inux71/lib-game-for-ios",
        }}
      />

      <Project
        title="Weather App"
        description="A mobile weather app. You can search the city and check the weather there."
        technologies={["Kotlin", "Jetpack Compose", "Swift", "SwiftUI"]}
        images={[
          "/images/projects/weather-app/android/weather_view.png",
          "/images/projects/weather-app/android/select_city_view.png",
          "/images/projects/weather-app/android/settings_view.png",
          "/images/projects/weather-app/ios/weather_view.png",
          "/images/projects/weather-app/ios/select_city_view.png",
          "/images/projects/weather-app/ios/settings_view.png",
        ]}
        links={{
          "android source code":
            "https://github.com/inux71/android-weather-widget",
          "iOS source code": "https://github.com/inux71/ios-weather-app",
        }}
        reverse
      />
    </section>
  );
}
