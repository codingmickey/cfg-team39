import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./CampaignDetails";
import PaymentForm from "./ExtraDetails";
import Review from "./Review";

/* eslint-disable no-restricted-globals */
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
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

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Bangalore Food Bank
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const steps = ["Campaign Details", "Other Details", "Review your campaign"];

function getStepContent(step) {
	switch (step) {
		case 0:
			return <AddressForm />;
		case 1:
			return <PaymentForm />;
		case 2:
			return <Review />;
		default:
			throw new Error("Unknown step");
	}
}

const theme = createTheme();

function Checkout() {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{/* <AppBar
				position="absolute"
				color="default"
				elevation={0}
				sx={{
					position: "relative",
					borderBottom: (t) => `1px solid ${t.palette.divider}`
				}}
			>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Company name
					</Typography>
				</Toolbar>
			</AppBar> */}
			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper variant="outlined" sx={{ my: { xs: 3 }, p: { xs: 2 } }}>
					<Typography component="h1" variant="h4" align="center">
						Start a Campaign
					</Typography>
					<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<React.Fragment>
						{activeStep === steps.length ? (
							<React.Fragment>
								<Typography variant="h5" gutterBottom>
									Thank you for your order.
								</Typography>
								<Typography variant="subtitle1">
									Your donation id is #2001539. We have emailed your donation
									details, and will send you an update when your donation will
									be contributed to society.
								</Typography>
							</React.Fragment>
						) : (
							<React.Fragment>
								{getStepContent(activeStep)}
								<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
									{activeStep !== 0 && (
										<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
											Back
										</Button>
									)}

									<Button
										variant="contained"
										onClick={handleNext}
										sx={{ mt: 3, ml: 1, backgroundColor: "#eb5310" }}
									>
										{activeStep === steps.length - 1
											? "Confirm a campaign"
											: "Next"}
									</Button>
								</Box>
							</React.Fragment>
						)}
					</React.Fragment>
				</Paper>
				<Copyright />
			</Container>
		</ThemeProvider>
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
				<Checkout />
			</Box>
		</Box>
	);
}
