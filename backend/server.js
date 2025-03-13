import express from 'express';
import authRoutes from "./routes/auth.route.js";

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api/v1/auth", authRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});