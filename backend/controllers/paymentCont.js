import asyncHandler from "express-async-handler";
import InstructorPayment from "../models/InstructorPayment";
import Razorpay from "razorpay";
import shortid from "shortid";
import { responsfrom } from "express";

const razorpay = new Razorpay({
  key_id: "rzp_test_tOsI14GHZSP3U8",
  key_secret: "oytgKKbuxFUlZdx4qr4tzG4j"
});
/*
LIST OF CONTROLLERS
1. paymentsToInstructors
2. perform a payment
3. Pay using razorpay
*/

// 1. Get all  paytments to Instructors -
const paymentsToInstructors = asyncHandler(async (req, res) => {
  const instructorPayments = await InstructorPayment.find({}).populate(
    "instructorId",
    "name email"
  );
  res.status(200).json({
    success: true,
    data: instructorPayments
  });
});

const performPayment = asyncHandler(async (req, res) => {
  const {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    instructorId,
    amount
  } = req.body;
  const payment = new InstructorPayment({
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    instructorId,
    amount: amount
  });
  await payment.save();
  return res.status(200).json({
    success: true,
    data: payment
  });
});

// Payment gateway using Razorpay
const payUsingRazorpayy = async (req, res) => {
  const { count, id } = req.body;
  console.log(count);
  const payment_capture = 1;
  const amount = count;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture
  };

  try {
    const response = await razorpay.orders.create(options);
    // console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount
    });
  } catch (error) {
    console.log(error);
  }
};

export { paymentsToInstructors, performPayment, payUsingRazorpayy };
