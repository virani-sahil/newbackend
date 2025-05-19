import express from "express"
import cors from "cors"
import router from "./routes/index.js";
import { connectDatabase } from "./config/database.js";

const app = express();

app.use(express.json())
app.use(cors())

connectDatabase();

app.use("/api", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})