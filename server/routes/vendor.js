import express from "express";
const router = express.Router();
import { getVendor, createVendor, stayVendor, deleteVendor } from "../controllers/vendors.js";


router.get("/", getVendor);
router.get("/:id", stayVendor);
router.delete("/:id/delete", deleteVendor);
router.post("/new", createVendor);

export default router;
