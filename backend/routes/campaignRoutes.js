import express from "express";
import {
  raisedExtract,
  raisedAdd,
  createCampaign
} from "../controllers/campaignControllers";

const router = express.Router();

router.route("/raisedExtract").get(raisedExtract);

router.route("/raisedAdd").post(raisedAdd);

router.route("/createCampaign").post(createCampaign);

export default router;
