import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next)=>{
    // res.send("welcome hotel") if i execute it, it gives me error
    //because: you send several responses for one request.
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(err) //previous: res.status(500).json(error)
    }
 
}

export const updateHotel = async (req, res, next)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, 
            {new: true}) //thanks to this line, we can see the updated case on postman
        res.status(200).json(updatedHotel) //if the method above is successful, return updatedHotel
    } catch (error) {
        next(err) //previous: res.status(500).json(error)
    }
}

export const deleteHotel = async (req, res, next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id) //thanks to this line, we can see the updated case on postman
        res.status(200).json("Hotel Has Been Deleted") //if the method above is successful, return updatedHotel
    } catch (error) {
        next(err) //previous: res.status(500).json(error)
    }
}

export const getHotel = async (req, res, next)=> {
    try {
        const hotel = await Hotel.findById(req.params.id) //thanks to this line, we can see the updated case on postman
        res.status(200).json(hotel) //if the method above is successful, return updatedHotel
    } catch (error) {
        next(err) //previous: res.status(500).json(error)
    }
}

export const getHotels = async (req, res, next)=> {
    try {
        const hotels = await Hotel.find() //thanks to this line, we can see the updated case on postman
        res.status(200).json(hotels) //if the method above is successful, return updatedHotel
    } catch (error) {
        next(err) //previous: res.status(500).json(error)
    }
}