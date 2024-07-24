import React from "react";
import { Box, Typography } from "@mui/material";
import img6 from "./assets/img6.jpg";

const Parallax = () => {
  return (
    <Box
      sx={{
        minHeight: "550px",
        backgroundImage: `url(${img6})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontFamily: "Circular Std, Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "4rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          position: "absolute",
          zIndex: 1,
        }}
      >
        OUR TEAM
      </Typography>
    </Box>
  );
};

export default Parallax;
