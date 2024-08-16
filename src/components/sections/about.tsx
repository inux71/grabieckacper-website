import {
  FaFacebookMessenger,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import Image from "next/image";
import Social from "../social";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center min-h-screen w-4/5"
    >
      <div className="flex flex-col justify-center items-center w-1/2">
        <Image
          src="/images/profile.jpg"
          width={300}
          height={300}
          alt="Profile picture."
          className="rounded-md"
        />

        <br></br>
      </div>

      <div className="flex flex-col justify-center items-center w-1/2">
        <h1 className="text-4xl font-bold">Kacper Grabiec</h1>
        <h5 className="text-lg">Mobile Developer</h5>

        <br></br>

        <p>
          I am a graduate of IT engineering studies specializing in creating
          mobile applications. I have programming skills in{" "}
          <span className="font-bold">Kotlin Jetpack Compose</span>,{" "}
          <span className="font-bold">SwiftUI</span>,{" "}
          <span className="font-bold">Java Spring Boot</span> and{" "}
          <span className="font-bold">ASP.NET Core</span>. My goal is to work as
          a Mobile Developer.
        </p>

        <br></br>

        <div className="flex justify-center items-center">
          <Social icon={FaGithub} url="https://github.com/inux71/" />
          <Social
            icon={FaLinkedin}
            url="https://www.linkedin.com/in/kacper-grabiec-878190202/"
          />
          <Social
            icon={FaFacebookMessenger}
            url="https://www.m.me/kacpergrabiec01"
          />
          <Social
            icon={FaInstagram}
            url="https://www.instagram.com/kacpergrabiec_/"
          />
        </div>
      </div>
    </section>
  );
}
