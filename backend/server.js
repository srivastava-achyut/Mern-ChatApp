import express from "express"
import connectmongo from "./db/connectmongo.js";
import dotenv from "dotenv";
import path from 'path'
import authRoute from "./routes/auth.routes.js"
import messageRoute from "./routes/message.routes.js"
import userRoute from "./routes/user.routes.js"


import cookieParser from 'cookie-parser'
import {app,server} from "./socket/socket.js"
// const app = express();

const __dirname= path.resolve();
dotenv.config();

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser())
app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoute)

app.use("/api/users", userRoute)

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT,()=>{
    connectmongo()
    console.log('server is listening on port 5000');
})