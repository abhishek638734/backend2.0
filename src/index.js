import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
});

import connectDB from "./db/index.js";



connectDB()
.then(()=>{

    app.error("error", (err)=>{
        consolde.error("An error occurred in the application\n", err);
        throw err;
    })


    app.listen(process.env.PORT || 8000, ()=>{
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
})
.catch(
    (err)=>{
        console.error("Error connecting to the database\n", err);
    }
)