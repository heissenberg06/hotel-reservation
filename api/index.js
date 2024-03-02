import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
// import usersRoute from "./routes/users.js"
// import roomsRoute from "./routes/rooms.js"
// import hotelsRoute from "./routes/hotels.js"

const app = express()
dotenv.config()
console.log(process.env.MONGO)



//to connect the api, this function will be ran 
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongo.Db")
      } catch (error) {
        throw error;
      }    
};

mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDB disconnected!!!")
})

mongoose.connection.on("connected", ()=> {
    console.log("mongoDB connected!!!")
})

//middlewares
app.use("/api/auth", authRoute)


app.listen(8800, ()=>{
    connect()
    console.log("connected to backend(ben bagladim-ben huseyin berk)")
});