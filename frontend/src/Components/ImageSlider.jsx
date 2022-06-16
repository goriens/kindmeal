import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@mui/material";

export const ImageSlider = () => {
  return (
    <Box sx={{ width: "1000px", margin: "auto" }}>
      <Carousel autoPlay>
        <Box sx={{ height: "400px" }}>
          <img src="https://www.kindmeal.my/photos/deal/6/666-4145-m.jpg" />
          <p className="legend">
            The Black Cat Cafe 17% off all time best offer! BUY NOW
          </p>
        </Box>
        <Box sx={{ height: "400px" }}>
          <img src="https://www.kindmeal.my/photos/deal/6/614-3355-m.jpg" />
          <p className="legend">Organic Butterfly Pea Flower Chia Seed Drink</p>
        </Box>
        <Box sx={{ height: "400px" }}>
          <img src="https://www.kindmeal.my/photos/deal/7/707-4819-l.jpg" />
          <p className="legend">Garden Vegetarian Cafe</p>
        </Box>
        <Box sx={{ height: "400px" }}>
          <img src="https://images.jdmagicbox.com/comp/temp/catalogue/0-chinese-food-cover-image-t3sdxqpgve.jpg" />
          <p className="legend">The Black Cat Cafe</p>
        </Box>
        <Box sx={{ height: "400px" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkf0MMQHp2mf7VovceOkUrYX2WJxtPea16hQqX9yyjywTsGmk7Nn19-Z0RRbWO80Fx7E&usqp=CAU" />
          <p className="legend">The Black Cat Cafe</p>
        </Box>
        <Box sx={{ height: "400px" }}>
          <img src="https://media-exp1.licdn.com/dms/image/C4E1BAQEqwG5IvDaZGw/company-background_10000/0/1572645769320?e=2147483647&v=beta&t=6KmdD_rXZJZe5RXw13YKoZ-TleYfQ5irbuESiMArl9k" />
          <p className="legend">The Black Cat Cafe</p>
        </Box>
      </Carousel>
    </Box>
  );
};
