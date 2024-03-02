import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();


router.get("/", (req, res)=> {
    res.send("welcome hotel")
})

//CREATE
router.post("/", async (req, res)=> {
    // res.send("welcome hotel") if i execute it, it gives me error
    //because: you send several responses for one request.
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE
router.put("/:id", async (req, res)=> {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, 
            {new: true}) //thanks to this line, we can see the updated case on postman
        res.status(200).json(updatedHotel) //if the method above is successful, return updatedHotel
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE
router.delete("/:id", async (req, res)=> {
    try {
        await Hotel.findByIdAndDelete(req.params.id) //thanks to this line, we can see the updated case on postman
        res.status(200).json("Hotel Has Been Deleted") //if the method above is successful, return updatedHotel
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET
router.get("/:id", async (req, res)=> {
    try {
        const hotel = await Hotel.findById(req.params.id) //thanks to this line, we can see the updated case on postman
        res.status(200).json(hotel) //if the method above is successful, return updatedHotel
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET ALL
router.get("/", async (req, res)=> {
    try {
        const hotels = await Hotel.find(req.params.id) //thanks to this line, we can see the updated case on postman
        res.status(200).json(hotels) //if the method above is successful, return updatedHotel
    } catch (error) {
        res.status(500).json(error)
    }
})



export default router