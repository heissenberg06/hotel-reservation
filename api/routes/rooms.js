import express from "express";
import { createError } from "../utils/error.js";
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom)
router.put("/:id", verifyAdmin, updateRoom)
router.delete("/:id", deleteRoom)
router.get("/:id", getRoom)
router.get("/", getRooms) //getHotels

export default router