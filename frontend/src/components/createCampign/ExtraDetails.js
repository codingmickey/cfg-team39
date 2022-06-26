import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function PaymentForm() {
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Other relevant details
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={12}>
					<TextField
						required
						id="cardName"
						label="Description"
						fullWidth
						autoComplete="cc-name"
						variant="standard"
					/>
				</Grid>
				<Grid item xs={12} md={12}>
					<TextField
						required
						id="cardName"
						label="Amount to be raised"
						fullWidth
						autoComplete="cc-name"
						variant="standard"
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
