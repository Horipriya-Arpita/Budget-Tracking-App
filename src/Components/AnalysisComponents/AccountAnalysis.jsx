import React from "react";
import { Box, Typography, IconButton, Stack, Button, Grid, Card } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Menu, Search } from "@mui/icons-material";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";
import { useTheme } from "../../Hooks/ThemeProvider";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const AccountAnalysis = () => {

  const { theme } = useTheme();

  // Data for the Bar Chart
  const chartData = {
    labels: ["Card", "Cash", "Savings"],
    datasets: [
      {
        label: "Expense",
        data: [6870, 8150, 5100],
        backgroundColor: "red",
      },
      {
        label: "Income",
        data: [7500, 22000, 9520],
        backgroundColor: "green",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { color: theme.color },
      },
    },
    scales: {
      x: {
        ticks: { color: theme.color },
        grid: { display: false },
      },
      y: {
        ticks: { color: theme.color },
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
        background:theme.cardBg,
        color: theme.color,
      }}
    >
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <IconButton color="inherit">
          <Menu />
        </IconButton>
        <Typography variant="h5" fontWeight="bold">
          MyMoney
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit">
            <ArrowBackIos />
          </IconButton>
          <Typography>December, 2024</Typography>
          <IconButton color="inherit">
            <ArrowForwardIos />
          </IconButton>
        </Stack>
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

      {/* Account Analysis Button */}
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
        <Typography>ACCOUNT ANALYSIS</Typography>
      </Button>

      {/* Bar Chart */}
      <Box sx={{ height: 200, mb: 3 }}>
        <Bar data={chartData} options={chartOptions} />
      </Box>

      {/* Account Details */}
      {[
        {
          label: "Card",
          expense: "৳0.00",
          income: "৳0.00",
          color: "error",
          icon: "💳",
        },
        {
          label: "Cash",
          expense: "৳2,150.00",
          income: "৳15,000.00",
          color: "green",
          icon: "💵",
        },
        {
          label: "Savings",
          expense: "৳0.00",
          income: "৳0.00",
          color: "primary",
          icon: "🐷",
        },
      ].map((account, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            mb: 2,
            background: theme.scardbg,
          }}
        >
          <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "1.5rem", marginRight: 10 }}>{account.icon}</span>
            {account.label}
          </Typography>
          <Stack>
            <Typography color="error">Expense: {account.expense}</Typography>
            <Typography color="green">Income: {account.income}</Typography>
          </Stack>
        </Card>
      ))}

    </Box>
    </Box>
    </div>
  );
};

export default AccountAnalysis;

