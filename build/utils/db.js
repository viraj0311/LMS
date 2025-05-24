"use strict";
// console.log('DB_URL:', process.env.DB_URL);
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// require("dotenv").config()
// console.log('DB_URL:', process.env.DB_URL);
const dbUrl = process.env.DB_URL || '';
// console.log(dbUrl)
const connecDB = async () => {
    try {
        await mongoose_1.default.connect(dbUrl).then((data) => {
            console.log(`Database Connected with ${data.connection.host}`);
        });
    }
    catch (error) {
        console.log(`Error to connect database ${error.message}`);
        // setTimeout(connecDB, 5000)
    }
};
exports.default = connecDB;
