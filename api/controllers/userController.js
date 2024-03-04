import User from "../models/User.js";


export const updateUser = async (req, res, next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, 
            {new: true}) //thanks to this line, we can see the updated case on postman
        res.status(200).json(updatedUser) //if the method above is successful, return updatedHotel
    } catch (error) {
        next(err) //previous: res.status(500).json(error)
    }
}

export const deleteUser = async (req, res, next)=>{
    try {
        await User.findByIdAndDelete(req.params.id) //thanks to this line, we can see the updated case on postman
        res.status(200).json("User Has Been Deleted") //if the method above is successful, return updatedHotel
    } catch (error) {
        next(err) //previous: res.status(500).json(error)
    }
}

export const getUser = async (req, res, next)=> {
    try {
        const user = await User.findById(req.params.id) //thanks to this line, we can see the updated case on postman
        res.status(200).json(user) //if the method above is successful, return updatedHotel
    } catch (error) {
        next(err) //previous: res.status(500).json(error)
    }
}

export const getUsers = async (req, res, next)=> {
    try {
        const users = await User.find() //thanks to this line, we can see the updated case on postman
        res.status(200).json(users) //if the method above is successful, return updatedHotel
    } catch (error) {
        next(err) //previous: res.status(500).json(error)
    }
}