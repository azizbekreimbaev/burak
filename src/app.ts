import express from 'express'
import path from 'path'
import router from './router'

// 1 - Starting Codes
const app = express()
// console.log("__dirname", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// 2 - Session Codes



// 3 - Views Codes
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")


// 4 - Router Codes
app.use("/", router)  // Middleware Design Pattern


export default app