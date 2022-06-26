import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm() {
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Campaign Details
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="Campaign Name"
						fullWidth
						autoComplete="given-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} sm={12}>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="Organisation Details"
						fullWidth
						autoComplete="family-name"
						variant="standard"
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
