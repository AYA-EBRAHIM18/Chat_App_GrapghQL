import { model, mongoose } from "mongoose";
import bcrypt from "bcryptjs";
const schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { updatedAt: false },
    versionKey: false,
  }
);

// Hash password before saving
schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
schema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const User = model("User", schema);
