import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
	{
		name: "Campaign Name",
		desc: "A nice thing",
		price: "$9.99"
	}
];

export default function Review() {
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Campaign summary
			</Typography>
			<List disablePadding>
				{products.map((product) => (
					<ListItem key={product.name} sx={{ py: 1, px: 0 }}>
						<ListItemText primary={product.name} secondary={product.desc} />
						{/* <Typography variant="body2">{product.price}</Typography> */}
					</ListItem>
				))}

				<ListItem sx={{ py: 1, px: 0 }}>
					<ListItemText primary="Funds to be raised" />
					<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
						---
					</Typography>
				</ListItem>
			</List>
		</React.Fragment>
	);
}
