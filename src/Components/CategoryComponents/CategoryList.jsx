// import React from "react";
// import { Box, List, ListItem, ListItemAvatar, ListItemText, IconButton } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const categories = {
//   income: [
//     { id: 1, name: "Salary", icon: "💰" },
//     { id: 2, name: "Rental", icon: "🏠" },
//   ],
//   expense: [
//     { id: 1, name: "Baby", icon: "👶" },
//     { id: 2, name: "Beauty", icon: "💄" },
//   ],
// };

// const CategoryList = ({ type, onCategoryClick, onEditClick }) => {
//   const categoryList = categories[type] || []; // Fallback to empty array

//   return (
//     <List>
//       {categoryList.map((category) => (
//         <ListItem key={category.id} button onClick={() => onCategoryClick(category)}>
//           <ListItemAvatar>
//             <span style={{ fontSize: "24px" }}>{category.icon}</span>
//           </ListItemAvatar>
//           <ListItemText primary={category.name} />
//           <IconButton
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent row click event
//               onEditClick(category);
//             }}
//           >
//             <EditIcon />
//           </IconButton>
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default CategoryList;

// import React from "react";
// import { List, 
//     ListItem, 
//     ListItemText, 
//     IconButton,
//     Grid,
//     Card,
//     Box,
//     Typography, 
//     ListItemIcon

//         } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete"
// import { useState } from "react";
// import FoodIcon from '@mui/icons-material/Fastfood';
// import EducationIcon from '@mui/icons-material/School';
// import WalletIcon from '@mui/icons-material/AccountBalanceWallet';


// const categories = {
//   income: [
//     { id: 1, name: "Salary", icon: <FoodIcon sx={{ color: 'white' }} /> },
//     { id: 2, name: "Rental", icon: "🏠" },
//   ],
//   expense: [
//     { id: 1, name: "Baby", icon: "👶" },
//     { id: 2, name: "Beauty", icon: <FoodIcon sx={{ color: 'red' }} /> },
//   ],
// };


// const CategoryList = ({ type, onCategoryClick, onEditClick }) => {
  
//   const categoryList = categories[type] || [];

//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedRecord, setSelectedRecord] = useState(null);

//     if (!categories || categories.length === 0) {
//     return <p>No {type} categories available.</p>; // Show a fallback message
//   }


  
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

//     <>
//     {/* <List>
//       {categoryList.map((category) => (
//         <ListItem
//           key={category.id}
//           button
//           onClick={() => onCategoryClick(category)}
//         >
//           <ListItemText primary={category.name} />
//           <IconButton
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent triggering `onCategoryClick`
//               onEditClick(category);
//             }}
//           >
//             <EditIcon />
//           </IconButton>
//         </ListItem>
//       ))}
//     </List> */}

    

//     <Grid container spacing={2} sx={{ px: 2 }}>
//         {categoryList.map((category) => (
//           <Grid item xs={12} key={category.id}>
//             <Card
//               // onClick={() => onCategoryClick(category)}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent row click event
//                 onCategoryClick(category);
//               }}

//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 backgroundColor: "#8e8985",//"#2c2c2c",
//                 color: "#fff",
//                 border: "1px solid",
//                 p: 2,
//                 borderRadius: 2,
//                 cursor: "pointer",
//               }}
//             >
//               {/* Icon and Category */}
//               <Box 
//               onClick={(e) => {
//                 //e.stopPropagation(); // Prevent row click event
//                 onCategoryClick(category);
//               }}
//               sx={{ display: "flex", justifyContent:"flex-end", alignItems: "center",border: "1px solid" }}
//               >
//                 <Box
//                   sx={{
//                     width: 40,
//                     height: 40,
//                     //backgroundColor: record.iconColor,
//                     borderRadius: "50%",
//                     display: "flex",
//                     border: "1px solid",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     mr: 2,
//                   }}
//                 >
//                   {category.icon}
//                 </Box>
//                 <Box>
//                   <Typography
//                     variant="subtitle1"
//                     sx={{ color: "#ffffffcc", fontWeight: "bold" }}
//                   >
//                     {category.name}
//                   </Typography>
//                 </Box>
//               </Box>

//               {/*Actions */}

//               <IconButton
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevent row click event
//                   onEditClick(category);
//                 }}
//               >
//                 <EditIcon />
//               </IconButton>
//               <IconButton>
//                 <DeleteIcon />
//               </IconButton>

//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </>
    
//   );
// };

// export default CategoryList;

import React from "react";
import { Grid, Card, Box, Typography, IconButton } from "@mui/material";
//import EditIcon from "@mui/icons-material/Edit";
//import DeleteIcon from "@mui/icons-material/Delete";
//import { useTheme } from "../Hooks/ThemeProvider"; // Importing useTheme hook
//import FoodIcon from '@mui/icons-material/Fastfood';
//import EducationIcon from '@mui/icons-material/School';
//import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { 
  EditVecIcon,
  DeleteVecIcon,
  BabyIcon,   
  WalletIcon,
  BillIcon,
  BeautyIcon,
  AwardIcon,
  CardIcon,
  CashIcon,
  ClothIcon,
  EducationIcon,
  EntertainmentIcon,
  FoodIcon,
  FoodnIcon,
  GiftboxIcon,
  HealthIcon,
  HomeIcon,
  InsuranceIcon,
  LotteryIcon,
  PhoneIcon,
  RefundIcon,
  RentIcon,
  SalaryIcon,
  SaleIcon,
  SavingsIcon,
  ShoppingIcon,
  SportIcon,
  TaxIcon,
  TransportIcon,
  MoneyIcon
 } from "../Icons/ExpenseIcons";
import { useTheme } from "../../Hooks/ThemeProvider";

const categories = {
  income: [
    { id: 1, name: "Salary", icon: <BabyIcon /> },
    { id: 2, name: "Rental", icon: <BillIcon/> },
    { id: 3, name: "Salary", icon: <BeautyIcon /> },
    { id: 4, name: "Rental", icon: <ClothIcon/> },
    { id: 5, name: "Salary", icon: <EducationIcon /> },
    { id: 6, name: "Rental", icon: <EntertainmentIcon/> },
    { id: 7, name: "Salary", icon: <FoodnIcon /> },
    { id: 8, name: "Rental", icon: <GiftboxIcon/> },
    { id: 9, name: "Salary", icon: <HealthIcon /> },
    { id: 10, name: "Rental", icon: <HomeIcon/> },
    { id: 11, name: "Salary", icon: <InsuranceIcon /> },
    { id: 12, name: "Rental", icon: <PhoneIcon/> },
    { id: 13, name: "Salary", icon: <ShoppingIcon /> },
    { id: 14, name: "Rental", icon: <SportIcon/> },
    { id: 15, name: "Salary", icon: <TaxIcon /> },
    { id: 16, name: "Rental", icon: <TransportIcon/> },
  ],
  expense: [
    { id: 1, name: "Award", icon: <AwardIcon /> },
    { id: 2, name: "Salary", icon: <MoneyIcon/> },
    { id: 3, name: "Savings", icon: <SavingsIcon /> },
    { id: 4, name: "Refund", icon: <RefundIcon/> },
    { id: 5, name: "Rental", icon: <RentIcon /> },
    { id: 6, name: "Lottery", icon: <LotteryIcon/> },
    { id: 7, name: "Sale", icon: <SaleIcon /> },
    { id: 8, name: "Rental", icon: <GiftboxIcon/> },
    { id: 9, name: "Salary", icon: <HealthIcon /> },
  ],
};

const CategoryList = ({ type, onCategoryClick, onEditClick }) => {
  const { theme } = useTheme(); // Accessing theme
  const categoryList = categories[type] || [];

  if (!categoryList || categoryList.length === 0) {
    return <p>No {type} categories available.</p>; // Show a fallback message
  }

  return (
    <Grid container spacing={2} sx={{ px: 2 }}>
      {categoryList.map((category) => (
        <Grid item xs={12} key={category.id}>
          <Card
            onClick={(e) => {
              e.stopPropagation(); // Prevent row click event
              onCategoryClick(category);
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: theme.scardbg,
              color: theme.categoryList.textColor,
              border: "0.3px solid #f081a2",
              p: 2,
              borderRadius: 2,
              cursor: "pointer",
              boxShadow: theme.boxShadow,
            }}
          >
            {/* Left side - Icon and Category Name */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 2,
                  border: "1px solid",
                }}
              >
                {category.icon}
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {category.name}
              </Typography>
            </Box>

            {/* Right side - Edit and Delete buttons */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation(); // Prevent row click event
                  onEditClick(category);
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
  );
};

export default CategoryList;
