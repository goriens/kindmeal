import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { AppBar } from "@mui/material";
import React from "react";

export const CategoryNav = () => {
  return (
    <Stack sx={{ backgroundColor: "#2BB673", color: "black" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          itemAlign: "center",
          spaceItemAlign: "center",
          color: "#fff",
          padding: "4px",
          width: "1100px",
          margin: "auto",
          cursor: "pointer",
        }}
      >
        <Typography variant="h6">Home</Typography>
        <Typography variant="h6">Meal Deals</Typography>
        <Typography variant="h6">KindMovement</Typography>
        <Typography variant="h6">Hot Picks</Typography>
        <Typography variant="h6">Directory</Typography>
        <Typography variant="h6">Articles</Typography>
        <Typography variant="h6">Help</Typography>
      </Box>
    </Stack>
  );
};
