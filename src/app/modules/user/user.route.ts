import express from "express";
import { createUser, getUsers } from "./user.controller";
const router = express.Router();

// router.get('/', createUser)
router.get('/', getUsers)
router.post('/create-user', createUser);

export default router;