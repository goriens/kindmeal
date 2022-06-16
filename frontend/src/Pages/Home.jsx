import React from "react";
import { Box } from "@mui/material";
import { ImageSlider } from "./../Components/ImageSlider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Footer } from "../Components/Footer";

export const Home = () => {
  return (
    <Box width="1200px" m="auto">
      <ImageSlider />
      <Typography variant="h4">Latest News & Videos</Typography>
      <Typography variant="h4">Yummylicious Moments</Typography>
      <Typography variant="h4">Discover Restaurants</Typography>
      <Typography variant="h4">Amazing Superheroes</Typography>

      <Typography variant="h3" textAlign="center" m="3rem">
        Introducing The World's 1st Meat-Free Lifestyle Platform
      </Typography>
      <Box
        display="flex"
        width="600px"
        margin="auto"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          itemAlign: "center",
        }}
      >
        <Typography variant="p" sx={{ color: "darkgray" }} mt="16px">
          Brought to you by:
        </Typography>
        <Box width="300px">
          <img src="https://www.kindmeal.my/images/logo-petfinder.png" alt="" />
        </Box>
      </Box>
      <Typography variant="h5" sx={{ textAlign: "center" }} m="3rem">
        Instant coupon & dining. No upfront coupon payment, booking or printing.
      </Typography>
      <Stack direction="row" width="1200px" margin="auto" spacing={1} mb="3rem">
        <Box
          sx={{
            padding: "2rem",
            textAlign: "center",
            border: "1px solid darkgray",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "150px", margin: "auto" }}>
            <img src="https://www.kindmeal.my/images/intro_deal.png" alt="" />
          </Box>
          <Typography variant="h6">Get Great Deals</Typography>
          <Typography variant="caption">
            Show our FREE digital coupons to instantly enjoy exciting deals
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "2rem",
            textAlign: "center",
            border: "1px solid darkgray",
            borderRadius: "10px",
          }}
          m="3rem"
        >
          <Box sx={{ width: "150px", margin: "auto" }}>
            <img
              src="https://www.kindmeal.my/images/intro_kindmoment.png"
              alt=""
            />
          </Box>
          <Typography variant="h6">Share KindMoments</Typography>
          <Typography variant="caption">
            Spread the joy by sharing your yummy dining moments
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "2rem",
            textAlign: "center",
            border: "1px solid darkgray",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "150px", margin: "auto" }}>
            <img src="https://www.kindmeal.my/images/intro_menu.png" alt="" />
          </Box>
          <Typography variant="h6">Discover Delicious</Typography>
          <Typography variant="caption">
            Explore the latest exquisite offerings and creative menus
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "2rem",
            textAlign: "center",
            border: "1px solid darkgray",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "150px", margin: "auto" }}>
            <img
              src="https://www.kindmeal.my/images/intro_friends.png"
              alt=""
            />
          </Box>
          <Typography variant="h6">Meet Food Lovers</Typography>
          <Typography variant="caption">
            Make new, compassionate friends and share great food tips
          </Typography>
        </Box>
      </Stack>
      <Typography
        variant="h5"
        sx={{ color: "darkgray" }}
        width="1000px"
        textAlign="center"
        m="auto"
      >
        Any restaurant or cafe can join KindMeal, vegetarian or not, as long as
        the deals and menu featured are meat-free. Enjoy a great meat-free
        dining experience. Easily save animal lives, health, environment and
        money now!
      </Typography>
      <Box m="3rem" textAlign="center">
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={{ padding: "0.1rem 4rem" }}
        >
          <div>
            <h1>
              Join KindMeal Now/- <br />
            </h1>
            <p>Your tasty journey begins here</p>
          </div>
        </Button>
      </Box>
      <div className="center">
        <Typography variant="h4">As Featured In</Typography>
        <Stack m="3rem">
          <img src="https://www.kindmeal.my/images/media-feature2.png" alt="" />
        </Stack>
        <Box m="3rem">
          <img
            src="https://www.kindmeal.my/images/banner_whykindmeal.png"
            alt=""
          />
        </Box>
      </div>
      <Footer />
    </Box>
  );
};
