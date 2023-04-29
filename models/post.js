//importing mongoose library and creating schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating user schema for user collection and schema contains fields identified by keys on left. Each field has data type 
const postSchema = new Schema({
    user_id: { type: String, trim: true, required: true},
    title: { type: String, trim: true, required: true, max:20},
    text: { type: String, trim: true, required: true },
    imageURL: { type: String, trim: true },
    likes: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", postSchema);