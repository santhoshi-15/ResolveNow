require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected to mongodb"))
.catch(err => console.error("MongoDB connection error:", err));
