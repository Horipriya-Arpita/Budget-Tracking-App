

import React from "react";
import { Grid, Card, Box, Typography, IconButton } from "@mui/material";

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
  expense: [
    { id: 1, name: "Baby", icon: <BabyIcon /> },
    { id: 2, name: "Bill", icon: <BillIcon/> },
    { id: 3, name: "Beauty", icon: <BeautyIcon /> },
    { id: 4, name: "Cloth", icon: <ClothIcon/> },
    { id: 5, name: "Education", icon: <EducationIcon /> },
    { id: 6, name: "Entertainment", icon: <EntertainmentIcon/> },
    { id: 7, name: "Food", icon: <FoodnIcon /> },
    { id: 8, name: "Gift", icon: <GiftboxIcon/> },
    { id: 9, name: "Health", icon: <HealthIcon /> },
    { id: 10, name: "Home", icon: <HomeIcon/> },
    { id: 11, name: "Insurance", icon: <InsuranceIcon /> },
    { id: 12, name: "Phone", icon: <PhoneIcon/> },
    { id: 13, name: "Shopping", icon: <ShoppingIcon /> },
    { id: 14, name: "Sport", icon: <SportIcon/> },
    { id: 15, name: "Tax", icon: <TaxIcon /> },
    { id: 16, name: "Transport", icon: <TransportIcon/> },
  ],
  income: [
    { id: 1, name: "Award", icon: <AwardIcon /> },
    { id: 2, name: "Salary", icon: <MoneyIcon/> },
    { id: 3, name: "Savings", icon: <SavingsIcon /> },
    { id: 4, name: "Refund", icon: <RefundIcon/> },
    { id: 5, name: "Rental", icon: <RentIcon /> },
    { id: 6, name: "Lottery", icon: <LotteryIcon/> },
    { id: 7, name: "Sale", icon: <SaleIcon /> },

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
