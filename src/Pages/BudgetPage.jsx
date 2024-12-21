// import React from "react";
// import { Box, Typography, Grid, Card, CardContent, Button, LinearProgress, Container } from "@mui/material";
// import { ArrowBack, ArrowForward } from "@mui/icons-material";

// const BudgetPage = () => {
//   // Dummy data
//   const budgetedCategories = [
//     { id: 1, name: "Education", limit: 2000, spent: 600, color: "#3F51B5" },
//     { id: 2, name: "Food", limit: 3000, spent: 100, color: "#F44336" },
//   ];

//   const notBudgeted = ["Baby", "Beauty", "Bills", "Car"];

//   // Helper to calculate remaining budget
//   const calculateProgress = (spent, limit) => (spent / limit) * 100;

//   return (
//     <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
//       <Card sx={{ maxWidth: 800, width: "100%", backgroundColor: "#1e1e1e", color: "#fff", p: 3, borderRadius: 2, boxShadow: 3 }}>
//         {/* Header */}
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
//           <ArrowBack sx={{ cursor: "pointer", color: "#ffffff99" }} />
//           <Typography variant="h6" sx={{ color: "#ffffffcc" }}>December, 2024</Typography>
//           <ArrowForward sx={{ cursor: "pointer", color: "#ffffff99" }} />
//         </Box>

//         {/* Total Budget and Spent */}
//         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
//           <Typography sx={{ color: "#ffffffcc" }}>Total Budget: <span style={{ fontWeight: "bold" }}>৳5,000.00</span></Typography>
//           <Typography>
//             Total Spent: <span style={{ color: "#F44336", fontWeight: "bold" }}>৳700.00</span>
//           </Typography>
//         </Box>

//         {/* Budgeted Categories */}
//         <Typography variant="h6" sx={{ mb: 2, color: "#ffffffcc" }}>
//           Budgeted categories: Dec, 2024
//         </Typography>
//         <Grid container spacing={2}>
//           {budgetedCategories.map((category) => (
//             <Grid item xs={12} key={category.id}>
//               <Card sx={{ backgroundColor: "#2c2c2c", color: "#fff", borderRadius: 2 }}>
//                 <CardContent>
//                   <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
//                     <Typography variant="subtitle1" sx={{ color: category.color, fontWeight: "bold" }}>
//                       {category.name}
//                     </Typography>
//                     <Typography sx={{ color: "#ffffffcc" }}>৳{category.limit.toFixed(2)}</Typography>
//                   </Box>
//                   <Typography variant="body2" sx={{ mb: 1, color: "#ffffff99" }}>
//                     Spent: ৳{category.spent.toFixed(2)} | Remaining: ৳{(category.limit - category.spent).toFixed(2)}
//                   </Typography>
//                   <LinearProgress
//                     variant="determinate"
//                     value={calculateProgress(category.spent, category.limit)}
//                     sx={{
//                       height: 10,
//                       borderRadius: 5,
//                       "& .MuiLinearProgress-bar": {
//                         backgroundColor: category.color,
//                       },
//                     }}
//                   />
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Not Budgeted This Month */}
//         <Typography variant="h6" sx={{ mt: 4, mb: 2, color: "#ffffffcc" }}>
//           Not budgeted this month
//         </Typography>
//         <Grid container spacing={2}>
//           {notBudgeted.map((item, index) => (
//             <Grid item xs={6} sm={3} key={index}>
//               <Card sx={{ backgroundColor: "#2c2c2c", color: "#fff", textAlign: "center", borderRadius: 2 }}>
//                 <CardContent>
//                   <Typography variant="subtitle2" sx={{ mb: 2, color: "#ffffffcc" }}>
//                     {item}
//                   </Typography>
//                   <Button variant="contained" size="small" color="primary">
//                     Set Budget
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Card>
//     </Box>
//   );
// };

// export default BudgetPage;

import React from 'react';
import { Box, Typography, Card, CardContent, Button, LinearProgress } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useTheme } from '../Hooks/ThemeProvider'; // Importing useTheme hook
import ViewCategory from '../Components/BudgetComponents/ViewCategory';

const BudgetPage = () => {
  const { theme } = useTheme(); // Access theme from context

  // Dummy data
  const budgetedCategories = [
    { id: 1, name: 'Education', limit: 2000, spent: 600, color: '#3F51B5' },
    { id: 2, name: 'Food', limit: 3000, spent: 100, color: '#F44336' },
  ];

  const notBudgeted = ['Baby', 'Beauty', 'Bills', 'Car'];

  // Helper to calculate remaining budget
  const calculateProgress = (spent, limit) => (spent / limit) * 100;

  return (
    <Box
      sx={{
        background: theme.background,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <Card
        sx={{
          maxWidth: 800,
          width: '100%',
          background: theme.budgetPage.cardBg,
          color: theme.budgetPage.cardText,
          p: 3,
          borderRadius: 2,
          boxShadow: theme.boxShadow,
        }}
      > */}
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
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 , background: theme.scardbg, borderRadius: "10px"}}>
          <ArrowBack sx={{ cursor: 'pointer', color: theme.headerTextColor }} />
          <Typography variant="h6" sx={{ color: theme.headerTextColor }}>December, 2024</Typography>
          <ArrowForward sx={{ cursor: 'pointer', color: theme.headerTextColor }} />
        </Box>

        {/* Total Budget and Spent */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography sx={{ color: theme.typographyColor }}>
            Total Budget: <span style={{ fontWeight: 'bold' }}>৳5,000.00</span>
          </Typography>
          <Typography>
            Total Spent: <span style={{ color: '#F44336', fontWeight: 'bold' }}>৳700.00</span>
          </Typography>
        </Box>

        {/* Budgeted Categories */}
        <Typography variant="h6" sx={{ mb: 2, color: theme.typographyColor }}>
          Budgeted categories: Dec, 2024
        </Typography>
        
        {/* Replaced Grid with Box (for layout purposes) */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {budgetedCategories.map((category) => (
            <Box
              key={category.id}
              sx={{
                width: '100%',
                md: '48%',
                background: theme.scardbg,
                borderRadius: 2,
              }}
            >
              <Card sx={{ background: theme.scardbg, color: theme.budgetPage.cardText, borderRadius: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ color: category.color, fontWeight: 'bold' }}>
                      {category.name}
                    </Typography>
                    <Typography sx={{ color: theme.typographyColor }}>৳{category.limit.toFixed(2)}</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 1, color: theme.color }}>
                    Spent: ৳{category.spent.toFixed(2)} | Remaining: ৳{(category.limit - category.spent).toFixed(2)}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={calculateProgress(category.spent, category.limit)}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      '& .MuiLinearProgress-bar': { backgroundColor: category.color },
                      backgroundColor: theme.budgetPage.progressBg,
                    }}
                  />
                  <ViewCategory/>

                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Not Budgeted This Month */}
        <Typography variant="h6" sx={{ mt: 4, mb: 2, color: theme.typographyColor }}>
          Not budgeted this month
        </Typography>

        {/* Replaced Grid with Box for layout */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {notBudgeted.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                sm: '24%',
                textAlign: 'center',
                background: theme.scardbg,
                borderRadius: 2,
              }}
            >
              <Card sx={{ background: theme.scardbg, color: theme.budgetPage.cardText, borderRadius: 2 }}>
                <CardContent sx={{display:'flex', justifyContent:'space-between'}}>
                  <Typography variant="subtitle1" sx={{ mb: 2, color: theme.typographyColor }}>
                    {item}
                  </Typography>
                  <Button variant="contained" size="small" color="primary" sx={{ backgroundColor: theme.budgetPage.buttonColor }}>
                    Set Budget
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      {/* </Card> */}
      </Box>
    </Box>
  );
};

export default BudgetPage;
