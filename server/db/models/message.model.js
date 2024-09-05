import { model, mongoose, Types } from "mongoose";

const schema = mongoose.Schema(
  {
    senderId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timeStamps: { updatedAt: false },
    versionKey: false,
  }
);

export const Message = model("Message", schema);
