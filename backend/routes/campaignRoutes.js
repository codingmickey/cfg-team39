import express from "express";
import { raisedExtract, raisedAdd } from "../controllers/campaignControllers";

const router = express.Router();

router.route("/raisedExtract").get(raisedExtract);

router.route("/raisedAdd").post(raisedAdd);
rotute()"".get/raisedExtract,();raisedExtract,
router.route("/raisedAdd").post(raisedAdd);


export default router;