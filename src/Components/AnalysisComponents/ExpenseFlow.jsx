import React from "react";
import { Box, Typography, IconButton, Stack, Button, Grid } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { useTheme } from "../../Hooks/ThemeProvider";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ExpenseFlow = () => {

  const { theme} = useTheme();

  // Data for the Line Chart
  const chartData = {
    labels: ["Dec 01", "Dec 09", "Dec 16", "Dec 24", "Dec 31"],
    datasets: [
      {
        label: "Income Flow",
        data: [0, 11000, 0, 7333, 0, 3666],
        borderColor: "green",
        backgroundColor: "transparent",
        borderWidth: 2,
        pointBorderColor: "green",
        pointBackgroundColor: "green",
        pointRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: theme.color },
        grid: { display: false },
      },
      y: {
        ticks: { color: theme.color},
        grid: { color: theme.color },
      },
    },
  };

  return (
    <div style={{ padding: '20px', color: theme.color }}>
      <Box
      sx={{
        background: theme.cardBg,
        color: theme.expenseOverview.cardText,
        padding: '20px',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '900px',
        margin: 'auto',
        boxShadow: theme.boxShadow,
      }}
    >

    
    <Box
      sx={{
        minHeight: "100vh",
        background: theme.cardBg,//"#1c1c1c",
        color: theme.color,//"#fff",
        padding: 2,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <IconButton color="inherit">
          <ArrowBackIos />
        </IconButton>
        <Typography variant="h5" fontWeight="bold">
          December, 2024
        </Typography>
        <IconButton color="inherit">
          <ArrowForwardIos />
        </IconButton>
      </Stack>

      {/* Stats Section */}
      <Grid container spacing={2} justifyContent="space-around" mb={3}>
        <Grid item>
          <Typography variant="body1" color="error">
            EXPENSE
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="error">
            ৳2,150.00
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="green">
            INCOME
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="green">
            ৳15,000.00
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" color={theme.color}>
            TOTAL
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            ৳12,850.00
          </Typography>
        </Grid>
      </Grid>

      {/* Income Flow Button */}
      <Button
        variant="outlined"
        fullWidth
        sx={{
          color: theme.color,
          borderColor: theme.color,
          mb: 3,
          "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
        }}
      >
        <Typography>INCOME FLOW</Typography>
      </Button>

      {/* Chart Section */}
      <Box sx={{ height: 200, mb: 3 }}>
        <Line data={chartData} options={chartOptions} />
      </Box>

      {/* Calendar Section */}
      <Box sx={{ background: theme.scardbg, borderRadius: 2, p: 2 }}>
        <Typography variant="h6" mb={1} >
          December, 2024
        </Typography>
        <Grid container columns={7} spacing={1}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <Grid item xs={1} key={day}>
              <Typography align="center" color={theme.color}>
                {day}
              </Typography>
            </Grid>
          ))}
          {[...Array(31)].map((_, index) => (
            <Grid item xs={1} key={index}>
              <Typography
                align="center"
                color={index === 9 || index === 20 ? "green" : "#fff"}
              >
                {index + 1}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

    </Box>
    </Box>
    </div>
  );
};

export default ExpenseFlow;

  