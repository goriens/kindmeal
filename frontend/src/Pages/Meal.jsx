import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Pagination } from "@mui/material";
import { Rating } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { useState } from "react";

export const Meal = () => {
  const [value, setValue] = React.useState(3);

  return (
    <Box width="1100px" margin="auto" mt="1rem">
      <Typography variant="h4">
        Meat-Free Deals | Restaurants In Malaysia
      </Typography>
      <Typography variant="body1" mt="1rem">
        Browse delicious meat-free, vegetarian deals from top restaurants and
        cafes! Just click on "Get Free Coupon" to obtain instant discounts and
        dine at the restaurants. No upfront payment, booking or printing is
        needed. If you share it on social media, you'll even DOUBLE your
        discount!
      </Typography>
      <Typography variant="body1" mt="1rem">
        Download our mobile app now to easily get coupons and start dining in a
        few seconds. Effortlessly save lives, health, environment and money now!
      </Typography>
      <Stack direction={"row"} spacing="1rem" mt="3rem">
        <TextField
          id="outlined-basic"
          label="Search Shop Or Deals"
          variant="outlined"
        />
        <Stack direction={"row"} width="400px" spacing="1rem">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              All Categories
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem>All Categories</MenuItem>
              <MenuItem>Pasta</MenuItem>
              <MenuItem>Burger</MenuItem>
              <MenuItem>Breakfast</MenuItem>
              <MenuItem>Salad</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">All Locations</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem>All locations</MenuItem>
              <MenuItem>Klang Valley</MenuItem>
              <MenuItem>Others</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Button variant="contained" color="error" sx={{ fontWeight: "bold" }}>
          Search Deals
        </Button>
        <Button variant="contained" color="success" sx={{ fontWeight: "bold" }}>
          Browse Restaurants
        </Button>
      </Stack>
      <Box m="3rem">
        <img src="https://www.kindmeal.my/images/banner_recipe.jpg" alt="" />
      </Box>
      <Pagination count={10} />
      <Box
        width="500px"
        sx={{
          p: "5px",
        }}
      >
        <Box sx={{ borderRadius: "10px" }}>
          <img
            src="https://www.kindmeal.my/photos/deal/6/696-5075-l.jpg"
            alt=""
            className="borderRad"
          />
        </Box>
        <Typography variant="h6" sx={{ p: "5px" }}>
          Alice Kitchen by Yishensu — Petaling Jaya, Selangor
        </Typography>
        <Typography variant="body1" sx={{ p: "5px" }}>
          Alice Kitchen delights you with fusion vegetarian and vegan gourmet
          cuisine, with an innovative gastronomic take on traditional an..
        </Typography>
        <Box
          sx={{ p: "5px", display: "flex", justifyContent: "space-between" }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: "#F53938" }}
          >
            Get FREE Coupon
          </Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography variant="body2">(05)</Typography>
          </Box>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ p: "15px" }}
        >
          <Stack direction="row">
            <CloudIcon
              sx={{
                fontSize: "26px",
                color: "#fff",
                backgroundColor: "#3ABB7C",
                m: "3px",
                p: "4px",
                borderRadius: "10px",
              }}
            />
            <HourglassBottomIcon
              sx={{
                fontSize: "26px",
                color: "#fff",
                backgroundColor: "#3ABB7C",
                m: "3px",
                p: "4px",
                borderRadius: "10px",
              }}
            />
            <LocalBarIcon
              sx={{
                fontSize: "26px",
                color: "#fff",
                backgroundColor: "#3ABB7C",
                m: "3px",
                p: "4px",
                borderRadius: "10px",
              }}
            />
          </Stack>
          <Box>
            <Typography variant="caption">KindMeal Discount</Typography>
            <Typography color={"red"} variant="h4">
              18% Off
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">Expiring Soon</Typography>
            <Typography color={"red"} variant="h4">
              3 Days
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
