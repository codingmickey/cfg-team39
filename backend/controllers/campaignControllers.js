import asyncHandler from "express-async-handler";
import Campaign from "../models/campaignModel";
import Donation from "../models/campaignModel";

const raisedExtract = asyncHandler(async (req, res) => {
  const Total = await Campaign.raised;

  // send the list of orders, current page number, total number of pages available
  res(Total);
});

const raisedAdd = asyncHandler(async (req, res) => {
  const Raised = await Campaign.raised;
  const temp = await Donation.donation;
  const Total = Raised + temp;
  Campaign.raised = Total;
  // send the list of orders, current page number, total number of pages available
  res(Total);
});

export { raisedExtract, raisedAdd };
