import { model, mongoose, Types } from "mongoose";

const schema = mongoose.Schema(
  {
    participants: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],

    messages: [
      {
        type: Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  {
    timeStamps: { updatedAt: false },
    versionKey: false,
  }
);

export const Chat = model("Chat", schema);
