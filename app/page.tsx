import { ModeToggle } from "@/components/common/mode-toggle";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {  
  return (
    <main>
      <ModeToggle />
      {/* list of all fontsize in tailwindcss */}
      <h1 className="text-1xl">text-1xl</h1>
      <h1 className="text-2xl">text-2xl</h1>
      <h1 className="text-3xl">text-3xl</h1>
      <h1 className="text-4xl">text-4xl</h1>
      <h1 className="text-5xl">text-5xl</h1>
      <h1 className="text-6xl">text-6xl</h1>
      <h1 className="text-7xl">text-7xl</h1>
      <h1 className="text-8xl">text-8xl</h1>
      <h1 className="text-9xl">text-9xl</h1>
    </main>
  );
}
