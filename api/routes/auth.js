import express from "express";
import { register } from "../controllers/authController.js"

const router = express.Router();

router.post("/register", register)

export default router













// router.get("/", (req, res)=> {
//     res.send("hello, this is auth endpoint")
// })
