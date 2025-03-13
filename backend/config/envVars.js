import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI,

};