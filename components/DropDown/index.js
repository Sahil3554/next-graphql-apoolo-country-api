import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";

export default function DropDown() {
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 320, margin: "5rem 4rem" }}>
      <Grid container justifyContent="center">
        <Grid item xs={8} md={8}>
          <Typography variant="h6" color="inherit" component="div">
            Select Country
          </Typography>
        </Grid>
        <Grid item xs={3} md={3}>
          <FormControl sx={{ minWidth: 120, marginRight: "auto" }}>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              label="Country"
              onChange={handleChange}
            >
              <MenuItem value="IN">INDIA</MenuItem>
              <MenuItem value="US">USA</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
