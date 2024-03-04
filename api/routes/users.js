import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("hello user, you are logged in(ben yazdim)")
})
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUser)
router.get("/", getUsers)

export default router