/* eslint-disable no-restricted-globals */
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListItemText from "@mui/material/ListItemText";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
/* eslint-disable no-restricted-globals */
import { Link } from "react-router-dom";
import image1 from "../assets/foodlogo.jpg";
import image2 from "../assets/jplogo.jpeg";
import image3 from "../assets/foodlogo3.png";

function ResponsiveGrid() {
	return (
		<Box>
			<Grid container spacing={{ xs: 2 }} columns={{ xs: 8, sm: 12, md: 6 }}>
				{/* {data.from(Array(3)).map((_, index) => ( */}
				<Grid item xs={2} sm={2} zeroMinWidth>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
							// component="img"
							// height="140"
							// image="/images/foodlogo.jpeg"
							// alt="food campaign"
							>
								<img
									src={image1}
									style={{ width: "60%", height: "140px" }}
									alt="_image"
								/>
							</CardMedia>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Food for Change
								</Typography>
								<Typography variant="body2" color="text.secondary" wrap>
									Food Campaigns are a widespread group of squamate reptiles,
									with over 6,000 species, ranging across all continents except
									Antarctica
								</Typography>
								<br />
								<Button variant="contained" sx={{ backgroundColor: "#eb5310" }}>
									Contribute for Campaign
								</Button>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={2} sm={2} zeroMinWidth>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
							// component="img"
							// height="140"
							// image="/images/foodlogo.jpeg"
							// alt="food campaign"
							>
								<img
									src={image2}
									style={{ width: "100%", height: "140px" }}
									alt="_image"
								/>
							</CardMedia>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									JP Food Campaigns
								</Typography>
								<Typography variant="body2" color="text.secondary" wrap>
									Food Campaigns are a widespread group of squamate reptiles,
									with over 6,000 species, ranging across all continents except
									Antarctica
								</Typography>
								<br />
								<Button variant="contained" sx={{ backgroundColor: "#eb5310" }}>
									Contribute for Campaign
								</Button>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={2} sm={2} zeroMinWidth>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
							// component="img"
							// height="140"
							// image="/images/foodlogo.jpeg"
							// alt="food campaign"
							>
								<img
									src={image3}
									style={{ width: "60%", height: "140px" }}
									alt="_image"
								/>
							</CardMedia>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Food Campaigns
								</Typography>
								<Typography variant="body2" color="text.secondary" wrap>
									Food Campaigns are a widespread group of squamate reptiles,
									with over 6,000 species, ranging across all continents except
									Antarctica
								</Typography>
								<br />
								<Button variant="contained" sx={{ backgroundColor: "#eb5310" }}>
									Contribute for Campaign
								</Button>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				{/* ))} */}
			</Grid>
		</Box>
	);
}

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary
}));

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
				style={{ backgroundColor: "#2c3e50" }}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Listed Campaigns
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box"
					}
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar />
				<Divider />
				<List>
					<Link to="/campaigns" style={{ textDecoration: "none" }}>
						<a href="/campaigns" style={{ textDecoration: "none" }}>
							<ListItem disablePadding sx={{ display: "block" }}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? "initial" : "center",
										px: 2.5
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : "auto",
											justifyContent: "center"
										}}
										title="All running Campaigns"
									>
										<AllInboxIcon />
									</ListItemIcon>
									<ListItemText
										primary="All Campaigns"
										sx={{ opacity: open ? 1 : 0, color: "#000000" }}
									/>
								</ListItemButton>
							</ListItem>
						</a>
					</Link>
					<Link to="/campaigns" style={{ textDecoration: "none" }}>
						<a href="/campaigns" style={{ textDecoration: "none" }}>
							<ListItem disablePadding sx={{ display: "block" }}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? "initial" : "center",
										px: 2.5
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : "auto",
											justifyContent: "center"
										}}
										title="Individual Campaigns"
									>
										<AccessibilityNewIcon />
									</ListItemIcon>
									<ListItemText
										primary="Individual"
										sx={{ opacity: open ? 1 : 0, color: "#000000" }}
									/>
								</ListItemButton>
							</ListItem>
						</a>
					</Link>
					<Link to="/campaigns" style={{ textDecoration: "none" }}>
						<a href="/campaigns" style={{ textDecoration: "none" }}>
							<ListItem disablePadding sx={{ display: "block" }}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? "initial" : "center",
										px: 2.5
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : "auto",
											justifyContent: "center"
										}}
										title="Corporate Campaigns"
									>
										<HomeWorkIcon />
									</ListItemIcon>
									<ListItemText
										primary="Corporate"
										sx={{ opacity: open ? 1 : 0, color: "#000000" }}
									/>
								</ListItemButton>
							</ListItem>
						</a>
					</Link>
					<Link to="/campaigns/create" style={{ textDecoration: "none" }}>
						<a href="/campaigns/create" style={{ textDecoration: "none" }}>
							<ListItem disablePadding sx={{ display: "block" }}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? "initial" : "center",
										px: 2.5
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : "auto",
											justifyContent: "center"
										}}
										title="Create a Campaign"
									>
										<AddCircleOutlineIcon />
									</ListItemIcon>
									<ListItemText
										primary="Create a Campaign"
										sx={{ opacity: open ? 1 : 0, color: "#000000" }}
									/>
								</ListItemButton>
							</ListItem>
						</a>
					</Link>
				</List>
				<Divider />
			</Drawer>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
			>
				<Toolbar />
				<ResponsiveGrid />
			</Box>
		</Box>
	);
}
