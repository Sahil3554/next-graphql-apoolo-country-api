import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { ALL_COUNTRIES } from "../../queries/country";
import { Plane } from "react-loader-spinner";
import { height } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { addCountries, updateCountry } from "../DropDown/dropDownSlice";
export default function DropDown() {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.dropDown.country);
  console.log(country);
  // const [country, setCountry] = useState("IN");
  const handleChange = (event) => {
    dispatch(updateCountry(event.target.value));
  };
  const { data, loading, error } = useQuery(ALL_COUNTRIES);
  useEffect(() => {
    dispatch(addCountries(data?.countries));
  }, [data]);

  if (loading || error) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          marginTop: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Plane ariaLabel="loading-indicator" />
      </div>
    );
  }
  return (
    <Box sx={{ minWidth: 320, margin: "5rem 4rem" }}>
      <Grid container justifyContent="center">
        <Grid item xs={8} md={8} sm={3}>
          <Typography variant="h6" color="inherit" component="div">
            Select Country
          </Typography>
        </Grid>
        <Grid item xs={3} md={3} sm={6}>
          <FormControl sx={{ minWidth: 20, marginRight: "auto" }}>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              defaultValue="IN"
              label="Country"
              onChange={handleChange}
            >
              {data.countries.map(({ name, code }) => (
                <MenuItem value={code}>{name}</MenuItem>
              ))}
              {/* <MenuItem value="IN">INDIA</MenuItem>
              <MenuItem value="US">USA</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
