import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"//after creating a room, we should add this room id inside room array
//which is in the Hotel model
import { createError } from "../utils/error.js"

export const createRoom = async (req, res, next)=>{
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRoom._id}
            });
        } catch (error) {
            next(error);
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
};

export const updateRoom = async (req, res, next)=>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body}, 
            {new: true}) //thanks to this line, we can see the updated case on postman
        res.status(200).json(updatedRoom) //if the method above is successful, return updatedHotel
    } catch (error) {
        next(error) //previous: res.status(500).json(error)
    }
}

export const deleteRoom = async (req, res, next)=>{
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id) //thanks to this line, we can see the updated case on postman
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: req.params.id}
            });
        } catch (error) {
            next(error);
        }
        res.status(200).json("Room Has Been Deleted") //if the method above is successful, return updatedHotel
    } catch (error) {
        next(error) //previous: res.status(500).json(error)
    }
}

export const getRoom = async (req, res, next)=> {
    try {
        const room = await Room.findById(req.params.id) //thanks to this line, we can see the updated case on postman
        res.status(200).json(room) //if the method above is successful, return updatedHotel
    } catch (error) {
        next(error) //previous: res.status(500).json(error)
    }
}

export const getRooms = async (req, res, next)=> {
    try {
        const rooms = await Hotel.find() //thanks to this line, we can see the updated case on postman
        res.status(200).json(rooms) //if the method above is successful, return updatedHotel
    } catch (error) {
        next(error) //previous: res.status(500).json(error)
    }
}