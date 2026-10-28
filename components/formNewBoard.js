"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const FormNewBoard = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      const data = await axios.post("api/board", { name });
      setName("");
      router.refresh();
      toast.success("Board created!");
    } catch (error) {
      const msg =
        error.response?.data?.error || error.message || "Something went wrong.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      <p className="font-bold text-lg">Create a feedback board</p>
      <fieldset className="fieldset w-full">
        <label className="label" htmlFor="board">
          Board name
        </label>
        <input
          required
          type="text"
          id="board"
          className="input input-bordered w-full"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </fieldset>
      <button className="btn btn-primary btn-block" type="submit">
        {loading && <span className="loading loading-spinner"></span>}
        Create board
      </button>
    </form>
  );
};

export default FormNewBoard;
