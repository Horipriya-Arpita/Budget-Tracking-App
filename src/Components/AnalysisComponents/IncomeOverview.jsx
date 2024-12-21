import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  Box,
  Typography,
  Stack,
  LinearProgress,
  Divider,
} from '@mui/material';
//import { useTheme } from '../Hooks/ThemeProvider'; // Import the ThemeProvider hook
import { useTheme } from '../../Hooks/ThemeProvider';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function IncomeOverview() {
  const { theme } = useTheme();

  const chartData = {
    labels: ['Education', 'Food', 'Entertainment', 'Savings'],
    datasets: [
      {
        data: [600, 100, 300, 700],
        backgroundColor: theme.progressBarColor,
        hoverBackgroundColor: theme.progressBarColor,
      },
    ],
  };

  const totalExpense = chartData.datasets[0].data.reduce((sum, val) => sum + val, 0);

  return (
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
      <Typography variant="h5" textAlign="center" gutterBottom sx={{ color: theme.expenseOverview.typographyColor }}>
        December, 2024
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: theme.expenseOverview.cardBg,
          borderRadius: '8px',
        }}
      >
        <Typography sx={{ color: theme.expenseOverview.typographyColor }}>
          Expense: ৳{totalExpense}.00
        </Typography>
        <Typography sx={{ color: theme.expenseOverview.typographyColor }}>
          Income: ৳17,500.00
        </Typography>
        <Typography sx={{ color: theme.expenseOverview.typographyColor }}>
          Total: ৳{17500 - totalExpense}.00
        </Typography>
      </Stack>

      <Divider sx={{ marginBottom: '20px', backgroundColor: theme.divider }} />

      <Typography variant="h6" textAlign="center" gutterBottom sx={{ color: theme.expenseOverview.typographyColor }}>
        Income Overview
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        marginBottom="20px"
        sx={{
          background: theme.scardbg,
          borderRadius: '8px',
          padding: '20px',
          border: `1px solid ${theme.expenseOverview.chartBorder}`,
        }}
      >
        <Doughnut
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: theme.chartLegendColor,
                },
              },
            },
          }}
          height={250}
          width={250}
        />
      </Box>

      <Typography variant="h6" textAlign="center" gutterBottom sx={{ color: theme.expenseOverview.typographyColor }}>
        Breakdown by Category
      </Typography>

      {chartData.labels.map((label, index) => {
        const color = chartData.datasets[0].backgroundColor[index];
        const amount = chartData.datasets[0].data[index];
        const percentage = ((amount / totalExpense) * 100).toFixed(2);

        return (
          <Box key={label} sx={{ padding: '20px', borderRadius: '9px', marginBottom: '20px', background: theme.scardbg }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="5px"
            >
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: color,
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                <Typography sx={{ color: theme.expenseOverview.typographyColor }}>
                  {label}
                </Typography>
              </Box>
              <Typography sx={{ color: theme.expenseOverview.typographyColor }}>
                ৳{amount.toFixed(2)} ({percentage}%)
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={percentage}
              sx={{
                height: '10px',
                borderRadius: '5px',
                backgroundColor: theme.expenseOverview.progressBarBg,
                '& .MuiLinearProgress-bar': { backgroundColor: color },
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}
