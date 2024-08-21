import Link from "next/link";

export default function Navbar() {
  const liClassName = "px-4 hover:font-bold";

  return (
    <nav className="flex justify-center items-center w-full fixed top-0 left-0 right-0 z-10 py-4 bg-white">
      <div className="flex justify-center lg:justify-end items-center w-2/3">
        <ul>
          <li>
            <Link href="#about" className={liClassName}>
              About
            </Link>
            <Link href="#projects" className={liClassName}>
              Projects
            </Link>
            <Link href="#experience" className={liClassName}>
              Experience
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
