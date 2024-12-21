import React from "react";
import { useTheme } from "../Hooks/ThemeProvider";

import { Delete} from '@mui/icons-material';
import { Box, Typography } from "@mui/material";

import { 
  EditVecIcon,
  DeleteVecIcon,
  BabyIcon,   
  WalletIcon,
  BillIcon,
  BeautyIcon,
  AwardIcon,
  CardIcon,
  CardnIcon,
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
 } from "../Components/Icons/ExpenseIcons";


const HomePage = () => {
    const { theme } = useTheme(); 

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
      <Typography variant="h5" textAlign="center" gutterBottom sx={{ color: theme.expenseOverview.typographyColor }}>
        December, 2024
      </Typography>

      <EditVecIcon/>
      <DeleteVecIcon/>
      <Delete/>
      <BabyIcon/>
      <HomeIcon/>
      <SalaryIcon/>
      <MoneyIcon/>
      <WalletIcon/>
      <BillIcon/>
      <AwardIcon/>
      <BeautyIcon/>
      <CardIcon/>
      <CardnIcon/>
      <CashIcon/>
      <ClothIcon/>
      <EducationIcon/>
      <EntertainmentIcon/>
      <FoodIcon/>
      <FoodnIcon/>
      <GiftboxIcon/> 
      <HealthIcon/>
      <InsuranceIcon/>
      <LotteryIcon/>
      <PhoneIcon/>
      <RentIcon/>
      <RefundIcon/>
      <SaleIcon/>
      <SavingsIcon/>
      <ShoppingIcon/>
      <SportIcon/>
      <TaxIcon/>
      <TransportIcon/>

      <h1>Arpita</h1>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: theme.scardbg,
          color: theme.categoryList.textColor,
          //border: "0.3px solid",
          p: 2,
          borderRadius: 2,
          cursor: "pointer",
          boxShadow: theme.categoryList.boxShadow,
        }}
      >
        <Typography>
          Hiii
        </Typography>

      </Box>
      </Box>
          
      
     
    </div>
  );
}

export default HomePage;