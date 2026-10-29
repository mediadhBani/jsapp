import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const getBoard = async (id) => {
  const session = await auth();
  await connectMongo();
  const board = await Board.findOne({
    _id: id,
    userId: session?.user?.id,
  });

  if (!board) redirect("/dashboard");

  return board;
};

export default async function FeedbackBoard({ params }) {
  const { boardId } = params;
  const board = await getBoard(boardId);
  return <div>{board.name}</div>;
}
