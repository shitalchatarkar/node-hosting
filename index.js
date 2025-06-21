const express = require("express")
const { default: mongoose } = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use("/api/notes", require("./routes/node.routes"))
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db server connection running")

    app.listen(process.env.PORT, console.log("server running"))
})
