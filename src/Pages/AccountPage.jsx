
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card
// } from "@mui/material";

// import FoodIcon from '@mui/icons-material/Fastfood';
// import EducationIcon from '@mui/icons-material/School';
// import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
// //import CashIcon from '@mui/icons-material/AttachMoney';

// import { ArrowBack, ArrowForward } from "@mui/icons-material";
// //import DetailDialog from "./DetailDialog"; // Importing the DetailDialog component
// import DetailDialog from "../Components/BudgetComponents/DetailDialog";

// const AccountPage = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedRecord, setSelectedRecord] = useState(null);

//   // Dummy data for records
//   const records = [
//     { id: 1, category: "Card", type: "Expense", amount: 100, iconColor: "#F44336", method: "Cash" , icon: <FoodIcon sx={{ color: 'red' }} />},
//     { id: 2, category: "Cash", type: "Expense", amount: 6000, iconColor: "#3F51B5", method: "Cash",icon: <EducationIcon sx={{ color: 'blue' }} /> },
//     { id: 3, category: "Savings", type: "Income", amount: 10000, iconColor: "#E91E63", method: "Cash", icon: <WalletIcon sx={{ color: 'green' }} /> },

//   ];

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
//           Acounts
//         </Typography>
//         <ArrowForward sx={{ cursor: "pointer", color: "#ffffff99" }} />
//       </Box>

//       {/* Summary */}
//       {/* <Box
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
//       </Box> */}

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
//                     Balance : {record.amount}
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


//       {/* Detail Dialog */}
//       <DetailDialog
//         open={openDialog}
//         onClose={() => setOpenDialog(false)}
//         record={selectedRecord}
//       />
//     </Box>
//   );
// };

// export default AccountPage;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
} from "@mui/material";

import {IconButton} from "@mui/material";
import { 
  EditVecIcon,
  DeleteVecIcon,
  CardIcon,
  CashIcon,
  SavingsIcon,
 } from "../Components/Icons/ExpenseIcons";

// import FoodIcon from '@mui/icons-material/Fastfood';
// import EducationIcon from '@mui/icons-material/School';
// import WalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useTheme } from "../Hooks/ThemeProvider"; // Importing useTheme hook
import DetailDialog from "../Components/BudgetComponents/DetailDialog";

const AccountPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const { theme } = useTheme(); // Access theme from context

  // Dummy data for records
  const records = [
    { id: 1, category: "Card",  amount: 100, icon: <CardIcon /> },
    { id: 2, category: "Cash",  amount: 6000, icon: <CashIcon/> },
    { id: 3, category: "Savings", amount: 10000, icon: <SavingsIcon/> },
  ];

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

    
    <Box sx={{ backgroundColor: theme.scardbg, minHeight: "100vh", padding: 2 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <ArrowBack sx={{ cursor: "pointer", color: theme.accountPage.arrowColor }} />
        <Typography variant="h6" sx={{ color: theme.accountPage.recordText }}>
          Accounts
        </Typography>
        <ArrowForward sx={{ cursor: "pointer", color: theme.accountPage.arrowColor }} />
      </Box>
      
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
                color: theme.accountPage.cardText,
                p: 2,
                borderRadius: 2,
                cursor: "pointer",
              }}
            >
              {/* Icon and Category */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    background: theme.cardBg,
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
                  <Typography
                    variant="subtitle1"
                    sx={{ color: theme.accountPage.recordText, fontWeight: "bold" }}
                  >
                    {record.category}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.color }}>
                    Balance:  `৳ {record.amount}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation(); // Prevent row click event
                  // onEditClick(record.category);
                }}
                sx={{ color: theme.categoryList.actionButtonColor }}
              >
                <EditVecIcon />
              </IconButton>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation(); // Prevent row click event
                  // Add delete functionality here
                }}
                sx={{ color: theme.categoryList.actionButtonColor }}
              >
                <DeleteVecIcon />
              </IconButton>
            </Box>
              
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Detail Dialog */}
      <DetailDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        record={selectedRecord}
      />
    </Box>
    </Box>
    </div>
  );
};

export default AccountPage;
