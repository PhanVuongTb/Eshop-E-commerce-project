import express from "express";
import { ListUsers, UserActivate } from "../controller/users";

const router = express.Router();

router.get("/users", ListUsers);
router.post("/activation-users", UserActivate);

export default router;
