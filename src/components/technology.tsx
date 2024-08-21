export default function Technology({ name }: { name: string }) {
  return (
    <span className="font-bold px-1 bg-black text-white mx-1 rounded-md">
      {name}
    </span>
  );
}
