import { connect } from "mongoose";

export const dbConnection = connect(process.env.MONGO_URI).then(() => {
  console.log("Database is connected successfully.");
});
