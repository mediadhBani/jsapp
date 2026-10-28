export default async function feedbackBoard({ params }) {
  const { boardId } = params;
  return <div>{boardId}</div>;
}
