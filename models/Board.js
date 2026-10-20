import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: True,
    trim: true,
  },
});

export default mongoose.models.Board || mongoose.model("Board", boardSchema);
