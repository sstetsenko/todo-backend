import mongoose from "mongoose";
import express from "express";
import config from "config"
import router from "./router.js";


const PORT = config.serverPort
const app = express()

app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(config.dbUrl)

        app.listen(PORT, () => {
            console.log(`Serverstarted on ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start()