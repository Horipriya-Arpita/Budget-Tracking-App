import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "../../Hooks/ThemeProvider";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/login");
    }

    const {theme} = useTheme();

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 2,
        background: theme.background,
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h3"
        component="h1"
        fontWeight="bold"
        color={theme.color}
        gutterBottom
      >
        Take Control of Your Finances, One Step at a Time
        {/* <Typography
          component="span"
          color="primary"
          fontWeight="bold"
          variant="h3"
        >
          AI
        </Typography> */}
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        color={theme.color}
        gutterBottom
        sx={{ maxWidth: "600px", mx: "auto", mb: 4 }}
      >
        Simplify budgeting, track expenses, and achieve your financial goals with ease.
      </Typography>

      {/* Action Buttons */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIosIcon />}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
          }}
          onClick={handleNavigate}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
          }}
          onClick={handleNavigate}
        >
          Sign In
        </Button>
      </Stack>
    </Box>
  );
};

export default HeroSection;
