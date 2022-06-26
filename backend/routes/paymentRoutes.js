import express from "express";

import {
  paymentsToInstructors,
  performPayment,
  payUsingRazorpayy
} from "../controllers/paymentCont.js";

const router = express.Router();

// get all payments
router.route("/paymentsToInstructors").get(paymentsToInstructors);

// Perform a payment
router.route("/performPayment").post(performPayment);

// Pay using Razorpay
router.route("/razorpayy").post(payUsingRazorpayy);

export default router;
