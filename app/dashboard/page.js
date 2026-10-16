import Image from "next/image";
import ButtonLogout from "@/components/buttonLogout";

export default function Home() {
  return (
    <main>
      <h1>Dashboard de mon appli</h1>
      <ButtonLogout />
    </main>
  );
}
