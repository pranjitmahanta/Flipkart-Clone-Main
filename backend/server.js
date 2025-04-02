require('dotenv').config();  // Load environment variables
const app = require('./app');
const connectDatabase = require('./config/database');
const cloudinary = require('cloudinary');

const PORT = process.env.PORT || 4000;

// Handle Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

// Connect to MongoDB
connectDatabase();

// Configure Cloudinary (Make sure .env contains these values)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});
