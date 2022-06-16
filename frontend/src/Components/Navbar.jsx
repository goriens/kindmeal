import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Toolbar, AppBar } from "@mui/material";
import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Facebook } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";

export const Navbar = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#fff", color: "black" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            itemAlign: "center",
            spaceItemAlign: "center",
          }}
        >
          <Box>
            <img
              src="https://www.kindmeal.my/images/logo-kindmeal.png"
              alt=""
            />
          </Box>
          <Stack
            direction={"row"}
            spacing="2rem"
            textAlign={"center"}
            sx={{ placeItems: "center" }}
          >
            <AttachFileIcon
              sx={{
                backgroundColor: "darkgray",
                color: "#fff",
                borderRadius: "50%",
                padding: "9px",
              }}
            />
            <Facebook
              sx={{
                backgroundColor: "darkgray",
                color: "#fff",
                borderRadius: "50%",
                padding: "9px",
              }}
            />
            <Twitter
              sx={{
                backgroundColor: "darkgray",
                color: "#fff",
                borderRadius: "50%",
                padding: "9px",
              }}
            />
          </Stack>
          <Stack direction={"row"} spacing="1rem" sx={{ placeItems: "center" }}>
            <Typography variant="caption">Login</Typography>
            <Chip
              label="Facebook"
              size="small"
              color="primary"
              sx={{
                fontWeight: "bold",
                padding: "5px 9px",
                borderRadius: "4px",
              }}
            />
            <Chip
              label="Email"
              size="small"
              sx={{
                color: "#fff",
                backgroundColor: "gray",
                fontWeight: "bold",
                padding: "5px 9px",
                borderRadius: "4px",
              }}
            />
            <Typography variant="caption">SignUp</Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
