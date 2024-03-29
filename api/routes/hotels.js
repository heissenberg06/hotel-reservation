import express from "express";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, updateHotel, getHotels } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel)
router.put("/:id", verifyAdmin, updateHotel)
router.delete("/:id", deleteHotel)
router.get("/:id", getHotel)
router.get("/", getHotels) //getHotels

export default router