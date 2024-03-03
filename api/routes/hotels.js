import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, updateHotel, getAll } from "../controllers/hotelController.js";

const router = express.Router();
// router.get("/", (req, res)=> {
//     res.send("welcome hotel")
// })
//THIS WAS FOR ONLY DEBUG MANUEL

router.post("/", createHotel)
router.put("/:id", updateHotel)
router.delete("/:id", deleteHotel)
router.get("/:id", getHotel)
router.get("/", getAll) //getHotels

export default router