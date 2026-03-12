import express from "express"
import connectmongo from "./db/connectmongo.js";
import dotenv from "dotenv";
import authRoute from "./routes/auth.routes.js"
import messageRoute from "./routes/message.routes.js"
import userRoute from "./routes/user.routes.js"


import cookieParser from 'cookie-parser'
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cookieParser())
app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoute)

app.use("/api/users", userRoute)


app.listen(PORT,()=>{
    connectmongo()
    console.log('server is listening on port 3000');
})