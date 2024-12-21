import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { useTheme } from "../../Hooks/ThemeProvider";
import HeroSection from "./HeroSection";

const features = [
  {
    title: "Insightful Analytics",
    description: "Get detailed insights and trends about your spending.",
  },
  {
    title: "Customizable Budgets",
    description: "Set personalized budgets for each category and track them easily.",
  },
  {
    title: "Expense Reminders",
    description: "Get notifications to log recurring or missed expenses.",
  },
  {
    title: "Recurring Transactions",
    description: "Automate tracking of regular income and expense entries.",
  },
  {
    title: "Category-Wise Analysis",
    description: "Break down your spending by categories and compare them.",
  },
  {
    title: "Income Tracking",
    description: "Track and analyze your income sources alongside expenses.",
  },
  {
    title: "Multi-Currency Support",
    description: "Record transactions in various currencies with live conversion rates.",
  },
  {
    title: "Shared Budgets",
    description: "Collaborate on budgets with family or roommates.",
  },
  {
    title: "Data Export",
    description: "Export your expense and income data to CSV or PDF formats.",
  },
  {
    title: "Cloud Sync",
    description: "Securely sync your data across multiple devices.",
  },
  {
    title: "Dark Mode",
    description: "Switch to dark mode for a comfortable viewing experience.",
  },
  {
    title: "Financial Goals",
    description: "Set savings goals and track your progress toward achieving them.",
  },
  {
    title: "Offline Mode",
    description: "Log transactions even when you're not connected to the internet.",
  },
  {
    title: "Multi-Account Support",
    description: "Track budgets and expenses across multiple bank accounts.",
  },
];

const Features = () => {

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
      <HeroSection/>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
        color={theme.color}
        gutterBottom
      >
        Features
      </Typography>
      <Typography
        variant="subtitle1"
        color={theme.color}
        gutterBottom
        sx={{ mb: 4 }}
      >
        Everything you need to manage your expenses efficiently
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                boxShadow: 3,
                background: theme.cardBg,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="h2"
                  fontWeight="bold"
                  color={theme.color}
                  gutterBottom
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  color={theme.color}
                  gutterBottom
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
