// console.log('DB_URL:', process.env.DB_URL);

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// require("dotenv").config()
// console.log('DB_URL:', process.env.DB_URL);

const dbUrl:string = process.env.DB_URL || ''
// console.log(dbUrl)

const connecDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data:any)=>{
            console.log(`Database Connected with ${data.connection.host}`)
        })
    } catch (error:any) {
        console.log(`Error to connect database ${error.message}`)
        // setTimeout(connecDB, 5000)
    }
}


export default connecDB;