import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true, //because we cannot create any hotel without a name
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true //because we cannot create any hotel without a name
    },
    password:{
        type: String,
        required: true //because we cannot create any hotel without a name
    },
    isAdmin:{
        type: Boolean,
        default: false,  
    },
},   
    {timestamps: true} //this gives me the times of the operations(login-register)
);

export default mongoose.model("User", UserSchema)