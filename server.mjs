//import
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs";
import beachRoutes from "./routes/beachRoutes.mjs";
import { errorHandling } from "./middleware/errorHandling.mjs";
import requestLog from "./middleware/requestLog.mjs";


//setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
connectDB();
app.use(express.json());
app.use(requestLog);

//routes
app.use("/api/beach", beachRoutes);

//errorhandling middleware
app.use(errorHandling);

//listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
