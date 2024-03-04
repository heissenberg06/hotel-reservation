import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true //because we cannot create any hotel without a name
    },
    type:{
        type: String,
        required: true //because we cannot create any hotel without a name
    },
    city:{
        type: String,
        required: true //because we cannot create any hotel without a name
    },
    address:{
        type: String,
        required: true //because we cannot create any hotel without a name
    },
    distance:{
        type: String,
        required: true //because we cannot create any hotel without a name
    },
    photos:{
        type: [String],
        required: true //because we cannot create any hotel without a name
    },
    title:{
        type: String,
        required: true //because we cannot create any hotel without a name
    },
    description:{
        type: String,
        required: true //because we cannot create any hotel without a name
    },
    rating:{
        type: String,
        min:0,
        max:5 //because we cannot create any hotel without a name
    },
    rooms:{
        type: [String],//because it is gonna include room ids (the reason of [])
    },
    cheapestPrice:{
        type: Number,
        required: true
    },
    featured:{
        type: Boolean,
        default: false,  
    },
});

export default mongoose.model("Room", RoomSchema)

//DEVAM EDICEM