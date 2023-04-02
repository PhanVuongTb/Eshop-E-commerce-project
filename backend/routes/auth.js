import express from "express";
import { upload } from "../utils/multer";
import { login, logout, signUp } from "../controller/auth";

const router = express.Router();

router.post("/login", login);
router.post("/signup", upload.single("file"), signUp);
router.get("/logout", logout);

export default router;
