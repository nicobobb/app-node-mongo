import express from "express";

const router = express.Router();

router.get("/", async (_, res, next) => {
    try {
        res.json({ message: "Users API v1" });
    } catch (error) {
        next(error);
    }
});

export default router;
