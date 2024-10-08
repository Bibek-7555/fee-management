import express from "express";
import { addPayment, editPayment, deletePayment } from "../controllers/payment.controller.js";
import { verifyJwt } from "../middlewares/userAuthorization.js";

const router = express.Router();

router
.route("/add-payment")
.post(verifyJwt, addPayment)

router
.route("/edit-payment/:id")
.put(verifyJwt, editPayment)

router
.route("/delete-Payment/:id")
.delete(verifyJwt, deletePayment)

export default router;