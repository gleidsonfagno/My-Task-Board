import express from "express"
import { route } from "./routes"
import cors from "cors";
const app = express()
const port = 3000

app.use(cors({
  origin: ["https://my-task-board-6whv.vercel.app/", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}))

app.use(express.json())

app.use("/api", route)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
