import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Property = ({ name, value, fullWidth }) => {
  return (
    <Grid item xs={fullWidth ? 12 : 6}>
      <Box display="flex" justifyContent="center">
        <Typography variant="h6">
          {name}:{value}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Property;
