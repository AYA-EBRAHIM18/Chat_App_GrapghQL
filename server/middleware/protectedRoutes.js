import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  // const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.log("Token verification failed:", error.message);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
