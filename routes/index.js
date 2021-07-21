import { Router } from "express";
import booksRoutes from "./books.js";
//table of contents for all of our route

const router = Router();
router.get("/", (req, res) => res.send("This is the api root!"));
router.use("/", booksRoutes);

export default router;