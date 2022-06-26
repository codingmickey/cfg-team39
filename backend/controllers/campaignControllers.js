import asyncHandler from "express-async-handler";
import Campaign from "../models/campaignModel";
import Donation from "../models/campaignModel";

// const createCampaign = asyncHandler(async (req, res) => {
//   // create a dummy product which can be edited later
//   const campaign = new Campaign({
//     name: "Sample",
//     campaignName: "mqwere",
//     organization: "mkgfngi",
//     user: req.user._id,
//     image: "/images/alexa.jpg",
//     description: "very nice product",
//     total: "645",
//     raised: "343"
//   });
//   const createdCampaign = await campaign.save();
//   res.status(201).json(createdCampaign);
// });

const raisedAdd = asyncHandler(async (req, res) => {
  const Raised = await Campaign.raised;
  const temp = await Donation.donation;
  const Total = Raised + temp;
  Campaign.raised = Total;
  // send the list of orders, current page number, total number of pages available
  res(Total);
});

export { raisedExtract, raisedAdd, createCampaign };
