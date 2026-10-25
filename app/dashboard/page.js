import Image from "next/image";
import ButtonLogout from "@/components/buttonLogout";
import FormNewBoard from "@/components/formNewBoard";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { auth } from "@/auth";
import Board from "@/models/Board";

async function getUser() {
  const session = await auth();
  await connectMongo();
  return await User.findById(session.user.id).populate("boards");
}

export default async function Dashboard() {
  const user = await getUser();

  return (
    <main className="bg-base-200 min-h-screen">
      {/* <h1>Dashboard de mon appli</h1>*/}
      <header className="bg-base-100">
        <div className="max-w-5xl mx-auto px-5 py-3 flex justify-end">
          <ButtonLogout />
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-5 py-3 space-y-12">
        <FormNewBoard />
        <div>
          <h1 className="font-extrabold text-xl mb-4">
            {user.boards.length} Boards
          </h1>

          <ul className="space-y-4">
            {user.boards.map((board) => (
              <div key={board._id} className="bg-base-100 p-6 rounded-3xl">
                {board.name}
              </div>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
