import express from "express";
const router = express.Router();
import { getCustomer, createCustomer, viewCustomer, addVendor, notify } from "../controllers/customers.js";
import { getVendor } from "../controllers/vendors.js";


router.get("/", getCustomer);
router.get("/:id", viewCustomer);
router.get("/:id/allVendor", getVendor);
router.put("/:id/allVendor/:venid", addVendor);
router.get("/:id/notify/:venid", notify);
router.post("/new", createCustomer);

export default router;
