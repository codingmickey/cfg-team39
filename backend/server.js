import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors"; // color the statements in the server side console log
import morgan from "morgan"; // show the API endpoints
import compression from "compression"; // use gzip compression in the express server
import cors from "cors"; // allow cross origin requests
// import cookieSession from "cookie-session"; // for implementing cookie sessions for passport
import path from "path";

// middleware
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
// import campaignRoutes from "./routes/campaignRoutes.js";
import generatePDF from "./generatePdf.js";
// import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();
const app = express();

// use morgan in development mode
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// connect to the mongoDB database
connectDB();

app.use(express.json()); // middleware to use req.body
app.use(cors()); // to avoid CORS errors
app.use(compression()); // to use gzip

// use cookie sessions
// app.use(
//   cookieSession({
//     maxAge: 1000 * 60 * 60 * 24, // 1 day
//     keys: [process.env.COOKIE_SESSION_KEY]
//   })
// );

// configure all the routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
// app.use("/api/pay", paymentRoutes);
// app.use("/api/campaign", campaignRoutes);
// app.use('/api/auth', authRoutes);
// app.use("/api/config", configRoutes);
// app.use("/api/upload", uploadRoutes);
app.use("/api/game", (req, res) => {
  let game = ["r", "p", , "s"];
  let score = {};
  for (let i = 0; i < 50; i++) {
    let round = [];
    for (let j = 0; j < 4; j++) {
      round[j] = game[Math.floor(Math.random() * game.length)];
    }
    let tempScore = {};
    for (let j = 0; j < 4; j++) {
      let userScore = [];
      for (let k = 0; k < 4; k++) {
        let val = 1;
        if (j != k) {
          // if (round[j] == "r" && round[k] == "p") {
          // } else {
          // }
        }
        userScore.push(val);
      }
      console.log(userScore);
      tempScore[`user${j + 1}`] = userScore;
    }
    score[`${i + 1}`] = tempScore;
  }
  res.json(score);
});

// Certificacte
app.post("/getCertificate", async (req, res) => {
  // res.send("<h1>Welcome to Full Stack Simplified</h1>");
  // res.download("output.pdf");
  try {
    const { name, email } = req.body;
    console.log(name, email);
    generatePDF(name, email);
    res.download("CertificateOfDonation.pdf");
    res.status(200).json({
      success: true,
      data: "Successfull"
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: true,
      data: error
    });
  }
});

const __dirname = path.resolve();

// To prepare for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.use("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

// middleware to act as fallback for all 404 errors
app.use(notFound);

// configure a custome error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
