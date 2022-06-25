import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    // add a reference to the corresponding user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    orderItems: [
      {
        qty: { type: Number, required: true, default: 0 },
        name: { type: String, required: true },
        price: { type: Number, required: true, default: 0 },
        image: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product"
        }
      }
    ],
    paymentMethod: {
      type: String,
      required: true
    },
    // depends on if stripe or paypal method is used
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String }
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0
    },
    isPaid: {
      type: Boolean,
      default: false
    },
    paidAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
