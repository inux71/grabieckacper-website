import Link from "next/link";
import Comment from "./comment";

export default function Navbar({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="invisible md:visible fixed top-0 left-0 right-0 z-10 flex flex-col items-center bg-black py-4">
      <div className="flex justify-between w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
        <Comment text={title} />

        <nav className="flex">
          <span>{"["}</span>

          <ul className="flex">
            {links.map((link: string, index: number) => {
              return (
                <li key={index} className="flex">
                  <Link href={`#${link}`} className="hover:font-extrabold">
                    {link}
                  </Link>

                  {index !== links.length - 1 && <pre>, </pre>}
                </li>
              );
            })}
          </ul>

          <span>{"]"}</span>
        </nav>
      </div>
    </div>
  );
}
