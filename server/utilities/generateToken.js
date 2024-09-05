import jwt from "jsonwebtoken";

export const generateCookie = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};
