import {
  FaFacebookMessenger,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import Social from "../social";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <>
        <h1 className="text-4xl font-bold">Kacper Grabiec</h1>
        <h5 className="text-lg">Mobile Developer | Backend Developer</h5>
      </>

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

      <br></br>

      <Link
        href="/files/CV_Kacper_Grabiec.pdf"
        target="_blank"
        download={true}
        className="hover:font-extrabold"
      >
        {"[get CV]"}
      </Link>
    </section>
  );
}
