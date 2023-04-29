//importing mongoose library and creating schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating user schema for user collection and schema contains fields identified by keys on left. Each field has data type 
const userSchema = new Schema({
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    emailId: { type: String, trim: true, required: true, unique:true },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("user", userSchema);