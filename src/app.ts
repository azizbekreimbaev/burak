import express from 'express'
import path from 'path'

const app = express()


// 1 - Starting Codes
// console.log("__dirname", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// 2 - Session Codes



// 3 - Views Codes
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")


// 4 - Router Codes

export default app