import { useQuery } from "@apollo/client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { COUNTRY_DATA } from "../../queries/country";
import Property from "./Property";
// import { Grid } from "react-loader-spinner";

const Details = () => {
  const countryCode = useSelector((state) => state.dropDown.country);
  const { data, loading, error } = useQuery(COUNTRY_DATA, {
    variables: {
      code: countryCode,
    },
  });
  if (data) {
    return (
      <Grid container>
        <Property name="Name" value={data.country.name} />
        <Property name="Capital" value={data.country.capital} />
        <Property name="Currency" value={data.country.currency} />
        <Property name="Native" value={data.country.native} />
        <Property
          name="Languages"
          value={data.country.languages.map((lang, index) => `${lang.name},`)}
          fullWidth={true}
        />
      </Grid>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          marginTop: "4rem",
          display: "flex",
          //   alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RotatingLines width="100" />
      </div>
    );
  }
};

export default Details;
