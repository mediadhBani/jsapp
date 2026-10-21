import Image from "next/image";
import ButtonLogout from "@/components/buttonLogout";
import FormNewBoard from "@/components/formNewBoard";

export default function Home() {
  return (
    <main className="bg-base-200 min-h-screen">
      {/* <h1>Dashboard de mon appli</h1>*/}
      <header className="bg-base-100">
        <div className="max-w-5xl mx-auto px-5 py-3 flex justify-end">
          <ButtonLogout />
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-5 py-3">
        <FormNewBoard />
      </section>
    </main>
  );
}
