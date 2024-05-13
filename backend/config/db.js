import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://raj:354321@cluster0.8rhxke3.mongodb.net/food-app')
    .then(()=>console.log("DB Connected"));
}