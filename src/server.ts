// // Architectural pattern: MVC, MVP, Dependency Injection
// // Bu umumiy struktura ==> inson butun tuzulishi
// // Model View Controller
// // Model View Presenter

// // Design pattern: Middleware, Decorator
// // Bu maxsus kichik struktura ==> inson maxsus m-n qol qismi


import dotenv from "dotenv";
dotenv.config();

import mongoose from 'mongoose';

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB connection succeed")
        const PORT = process.env.PORT ?? 3003;
    })
    .catch((err) => {
        console.log("ERROR on connection MongoDB", err)
    });

// console.log("PORT", process.env.PORT)
// console.log("PORT", process.env.MONGO_URL)











