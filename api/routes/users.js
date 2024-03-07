import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("hello user, you are logged in(ben yazdim)")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//     res.send("hello user, you are logged in and you can delete your account(ben yazdim)")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     console.log(req.user.isAdmin);
//     res.send("hello ADMIN, you are logged in and you can delete all accounts(ben yazdim)")
// }) 
//for the checking something only


router.put("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser)
router.get("/:id", verifyUser, getUser)
router.get("/", verifyAdmin, getUsers) //here user verifyAdmin because only admin can reach all the user info

export default router