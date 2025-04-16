import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./config/db.js"
import cors from "cors"
import path from "path"

dotenv.config()

connectDB()

const app = express()

app.use(express.json())
// app.use(cors())

app.use("/api/auth", authRoutes)

const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, "frontend/dist")))
app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
   })

const PORT = process.env.PORT || 5001

app.listen(PORT, ()=>{
    console.log("Server is listening on port: ", PORT)
})