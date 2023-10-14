import express from "express";
import { login } from "../controllers/users.controllers.js";
const router = express.Router();

router.post("/auth/:email", login);

export default router;
