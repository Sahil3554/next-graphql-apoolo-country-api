import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "2px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography variant="p">Created By Sahil Tagra </Typography>
    </Box>
  );
};

export default Footer;
