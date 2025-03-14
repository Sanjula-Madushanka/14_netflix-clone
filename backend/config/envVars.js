import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI,
   JWT_SECRET: process.env.JWT_SECRET,
   TMDB_API_KEY: process.env.TMDB_API_KEY
};