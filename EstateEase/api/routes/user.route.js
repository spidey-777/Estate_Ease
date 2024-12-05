import express from 'express';
import { login, logout, register } from '../controllers/auth.controller.js';
import { deleteUser, getUser, getUsers, profilePosts, savePost, updateUser,getNotificationNumber } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';


const router = express.Router();

router.get("/",getUsers);
// router.get("/:id",verifyToken,getUser);
router.put("/:id",verifyToken,updateUser);
router.delete("/:id",verifyToken,deleteUser);
router.post("/save",verifyToken,savePost);
router.get("/profilePosts",verifyToken,profilePosts);
router.get("/notification",verifyToken,getNotificationNumber);
export default router;