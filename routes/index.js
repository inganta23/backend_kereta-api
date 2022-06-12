import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken, cekToken } from "../controllers/RefreshToken.js";
import { getTickets, getTicketsById, insertTickets, searchTickets } from "../controllers/Tickets.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/tickets", getTickets);
router.post("/tickets", insertTickets);
router.post("/searchTickets", searchTickets);
router.get("/tickets/:id", getTicketsById);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.get("/cek", cekToken);
router.delete('/logout', Logout);

export default router;
