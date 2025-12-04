import express from "express"
import { route } from "./routes"
const app = express()
const port = 3000

app.use(express.json())

app.use("/api", route)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
