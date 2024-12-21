

// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   //CardContent,
//   Fab,
//   //IconButton,
//   //ListItemIcon
// } from "@mui/material";

// import FoodIcon from '@mui/icons-material/Fastfood';
// import EducationIcon from '@mui/icons-material/School';
// import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
// //import CashIcon from '@mui/icons-material/AttachMoney';

// import { Add, ArrowBack, ArrowForward } from "@mui/icons-material";
// //import DetailDialog from "./DetailDialog"; // Importing the DetailDialog component
// import DetailDialog from "../Components/BudgetComponents/DetailDialog";

// const RecordPage = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedRecord, setSelectedRecord] = useState(null);

//   // Dummy data for records
//   const records = [
//     { id: 1, category: "Food", type: "Expense", amount: -100, iconColor: "#F44336", method: "Cash" , icon: <FoodIcon sx={{ color: 'red' }} />},
//     { id: 2, category: "Education", type: "Expense", amount: -600, iconColor: "#3F51B5", method: "Cash",icon: <EducationIcon sx={{ color: 'blue' }} /> },
//     { id: 3, category: "Salary", type: "Income", amount: 10000, iconColor: "#E91E63", method: "Cash", icon: <WalletIcon sx={{ color: 'green' }} /> },
//     { id: 4, category: "Salary", type: "Income", amount: 7500, iconColor: "#E91E63", method: "Cash",icon: <WalletIcon sx={{ color: 'green' }} /> },
//   ];

//   const totalExpense = 700; // Example total expense
//   const totalIncome = 17500; // Example total income
//   const totalBalance = 16800; // Example total balance

//   const handleCardClick = (record) => {
//     setSelectedRecord(record);
//     setOpenDialog(true);
//   };

//   return (
//     <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", padding: 2 }}>
//       {/* Header */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 2,
//         }}
//       >
//         <ArrowBack sx={{ cursor: "pointer", color: "#ffffff99" }} />
//         <Typography variant="h6" sx={{ color: "#ffffffcc" }}>
//           December, 2024
//         </Typography>
//         <ArrowForward sx={{ cursor: "pointer", color: "#ffffff99" }} />
//       </Box>

//       {/* Summary */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           mb: 3,
//           px: 2,
//         }}
//       >
//         <Typography sx={{ color: "#F44336", fontWeight: "bold" }}>
//           EXPENSE <br /> ৳{totalExpense.toFixed(2)}
//         </Typography>
//         <Typography sx={{ color: "#4CAF50", fontWeight: "bold" }}>
//           INCOME <br /> ৳{totalIncome.toFixed(2)}
//         </Typography>
//         <Typography sx={{ color: "#ffffffcc", fontWeight: "bold" }}>
//           TOTAL <br /> ৳{totalBalance.toFixed(2)}
//         </Typography>
//       </Box>

//       {/* Records List */}
//       <Typography
//         variant="h6"
//         sx={{ color: "#ffffffcc", mb: 2, px: 2 }}
//       >
//         Dec 10, Tuesday
//       </Typography>
//       <Grid container spacing={2} sx={{ px: 2 }}>
//         {records.map((record) => (
//           <Grid item xs={12} key={record.id}>
//             <Card
//               onClick={() => handleCardClick(record)}
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 backgroundColor: "#2c2c2c",
//                 color: "#fff",
//                 p: 2,
//                 borderRadius: 2,
//                 cursor: "pointer",
//               }}
//             >
//               {/* Icon and Category */}
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <Box
//                   sx={{
//                     width: 40,
//                     height: 40,
//                     backgroundColor: record.iconColor,
//                     borderRadius: "50%",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     mr: 2,
//                   }}
//                 >
//                   {/* <Typography
//                     variant="body2"
//                     sx={{ color: "#fff", fontWeight: "bold" }}
//                   >
//                     {record.category.charAt(0)}
//                   </Typography> */}

//                   {record.icon}
//                 </Box>
//                 <Box>
//                   <Typography
//                     variant="subtitle1"
//                     sx={{ color: "#ffffffcc", fontWeight: "bold" }}
//                   >
//                     {record.category}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#ffffff99" }}>
//                     {record.method}
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* Amount */}
//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   color:
//                     record.type === "Income" ? "#4CAF50" : "#F44336",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {record.amount > 0 ? `৳${record.amount.toFixed(2)}` : `৳${Math.abs(record.amount).toFixed(2)}`}
//               </Typography>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Floating Action Button */}
//       <Fab
//         color="primary"
//         aria-label="add"
//         sx={{
//           position: "fixed",
//           bottom: 16,
//           right: 16,
//           backgroundColor: "#4CAF50",
//         }}
//       >
//         <Add />
//       </Fab>

//       {/* Detail Dialog */}
//       <DetailDialog
//         open={openDialog}
//         onClose={() => setOpenDialog(false)}
//         record={selectedRecord}
//       />
//     </Box>
//   );
// };

// export default RecordPage;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useTheme } from "../Hooks/ThemeProvider";
import DetailDialog from "../Components/BudgetComponents/DetailDialog";
import { FoodIcon, BabyIcon, EducationIcon, SalaryIcon, MoneyIcon } from "../Components/Icons/ExpenseIcons";

const RecordPage = () => {
  const { theme } = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  // Dummy data for records
  const records = [
    { id: 1, category: "Food", type: "Expense", amount: -100, method: "Cash", iconColor: theme.scardbg, icon: <FoodIcon/> },
    { id: 2, category: "Education", type: "Expense", amount: -600, method: "Cash", iconColor: theme.scardbg, icon: <EducationIcon/> },
    { id: 3, category: "Salary", type: "Income", amount: 10000, method: "Cash", iconColor: theme.scardbg , icon: <SalaryIcon/>},
    { id: 4, category: "Salary", type: "Income", amount: 7500, method: "Cash", iconColor: theme.scardbg, icon: <MoneyIcon/> },
  ];

  const totalExpense = 700;
  const totalIncome = 17500;
  const totalBalance = 16800;

  const handleCardClick = (record) => {
    setSelectedRecord(record);
    setOpenDialog(true);
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

    
    <Box sx={{ backgroundColor: theme.recordPage.background, minHeight: "100vh", padding: 2 }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <ArrowBack sx={{ cursor: "pointer", color: theme.recordPage.dateText }} />
        <Typography variant="h6" sx={{ color: theme.recordPage.dateText }}>
          December, 2024
        </Typography>
        <ArrowForward sx={{ cursor: "pointer", color: theme.recordPage.dateText }} />
      </Box>

      {/* Summary */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3, px: 2 }}>
        <Typography sx={{ color: theme.recordPage.expenseColor, fontWeight: "bold" }}>
          EXPENSE <br /> ৳{totalExpense.toFixed(2)}
        </Typography>
        <Typography sx={{ color: theme.recordPage.incomeColor, fontWeight: "bold" }}>
          INCOME <br /> ৳{totalIncome.toFixed(2)}
        </Typography>
        <Typography sx={{ color: theme.recordPage.summaryText, fontWeight: "bold" }}>
          TOTAL <br /> ৳{totalBalance.toFixed(2)}
        </Typography>
      </Box>

      {/* Records List */}
      <Typography variant="h6" sx={{ color: theme.recordPage.dateText, mb: 2, px: 2 }}>
        Dec 10, Tuesday
      </Typography>
      <Grid container spacing={2} sx={{ px: 2 }}>
        {records.map((record) => (
          <Grid item xs={12} key={record.id}>
            <Card
              onClick={() => handleCardClick(record)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: theme.scardbg,
                color: theme.recordPage.cardText,
                p: 2,
                borderRadius: 2,
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
              
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    background: record.iconColor,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                {record.icon}
                </Box>
                
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {record.category}
                  </Typography>
                  <Typography variant="body2">{record.method}</Typography>
                </Box>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: record.type === "Income" ? theme.recordPage.incomeColor : theme.recordPage.expenseColor,
                  fontWeight: "bold",
                }}
              >
                ৳{Math.abs(record.amount).toFixed(2)}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Detail Dialog */}
      <DetailDialog open={openDialog} onClose={() => setOpenDialog(false)} record={selectedRecord} />
    </Box>
    </Box>
    </div>
  );
};

export default RecordPage;
