import mongoose from "mongoose";

const beachSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  island: {
    type: String,
    required: true,
  },
  public: {
    type: Boolean,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Beach", beachSchema);
