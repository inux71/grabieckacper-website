import Link from "next/link";
import { IconType } from "react-icons";

export default function Social({
  icon: Icon,
  url,
}: {
  icon: IconType;
  url: string;
}) {
  return (
    <Link href={url} target="_blank" className="p-1 hover:scale-95">
      <Icon size={30} />
    </Link>
  );
}
