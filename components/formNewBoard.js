const FormNewBoard = () => (
  <div className="bg-base-100 p-8 rounded-3xl space-y-8">
    <p className="font-bold text-lg">Create a feedback board</p>
    <fieldset className="fieldset w-full">
      <label className="label" htmlFor="board">
        Board name
      </label>
      <input
        type="text"
        id="board"
        className="input input-bordered w-full"
        placeholder="Name"
      />
    </fieldset>
    <button className="btn btn-primary btn-block">Create board</button>
  </div>
);

export default FormNewBoard;
