// import React, { useState } from "react";
// import { Dialog, DialogTitle, DialogContent, TextField, Box, Button } from "@mui/material";
// import { useTheme } from "../../Hooks/ThemeProvider";
// import { 
//   EditVecIcon,
//   DeleteVecIcon,
//   BabyIcon,   
//   WalletIcon,
//   BillIcon,
//   BeautyIcon,
//   AwardIcon,
//   CardIcon,
//   CashIcon,
//   ClothIcon,
//   EducationIcon,
//   EntertainmentIcon,
//   FoodIcon,
//   FoodnIcon,
//   GiftboxIcon,
//   HealthIcon,
//   HomeIcon,
//   InsuranceIcon,
//   LotteryIcon,
//   PhoneIcon,
//   RefundIcon,
//   RentIcon,
//   SalaryIcon,
//   SaleIcon,
//   SavingsIcon,
//   ShoppingIcon,
//   SportIcon,
//   TaxIcon,
//   TransportIcon,
//   MoneyIcon
//  } from "../Icons/ExpenseIcons";

// const icons = [<BabyIcon/>,   
//   <WalletIcon/>,
//   <BillIcon/>,
//   <BeautyIcon/>,
//   <AwardIcon/>,
//   <HomeIcon/>,
//       <SalaryIcon/>,
//       <MoneyIcon/>,
//       <WalletIcon/>,
//       <BillIcon/>,
//       <AwardIcon/>,
//       <BeautyIcon/>,
//       <CardIcon/>,
//       <CashIcon/>,
//       <ClothIcon/>,
//       <EducationIcon/>,
//       <EntertainmentIcon/>,
//       <FoodIcon/>,
//       <FoodnIcon/>,
//       <GiftboxIcon/>, 
//       <HealthIcon/>,
//       <InsuranceIcon/>,
//       <LotteryIcon/>,
//       <PhoneIcon/>,
//       <RentIcon/>,
//       <RefundIcon/>,
//       <SaleIcon/>,
//       <SavingsIcon/>,
//       <ShoppingIcon/>,
//       <SportIcon/>,
//       <TaxIcon/>,
//       <TransportIcon/>
//     ];

// const EditCategoryDialog = ({ open, category, onClose }) => {
//   const [name, setName] = useState(category ? category.name : "");
//   const [selectedIcon, setSelectedIcon] = useState(category ? category.icon : icons[0]);

//   const theme = useTheme();

//   const handleSave = () => {
//     // Add save logic
//     onClose();
//   };

//   return (
//     <Dialog open={open} onClose={onClose} >
//       <DialogTitle
//         sx={{color: theme.color}}
//       >Edit Category</DialogTitle>
//       <DialogContent>
//         <TextField
//           label="Name"
//           fullWidth
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           sx={{ mb: 2 , color: theme.color}}
//         />
//         <Box sx={{ display: "flex", gap: 1 }}>
//           {icons.map((icon) => (
//             <Button
//               key={icon}
//               variant={selectedIcon === icon ? "contained" : "outlined"}
//               onClick={() => setSelectedIcon(icon)}
//             >
//               {icon}
//             </Button>
//           ))}
//         </Box>
//         <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
//           <Button onClick={onClose}>Cancel</Button>
//           <Button onClick={handleSave} variant="contained">
//             Save
//           </Button>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default EditCategoryDialog;


import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Box, Button, Typography } from "@mui/material";
import { useTheme } from "../../Hooks/ThemeProvider";
import {
  BabyIcon,
  WalletIcon,
  BillIcon,
  BeautyIcon,
  AwardIcon,
  HomeIcon,
  SalaryIcon,
  MoneyIcon,
  CardIcon,
  CashIcon,
  ClothIcon,
  EducationIcon,
  EntertainmentIcon,
  FoodIcon,
  FoodnIcon,
  GiftboxIcon,
  HealthIcon,
  InsuranceIcon,
  LotteryIcon,
  PhoneIcon,
  RentIcon,
  RefundIcon,
  SaleIcon,
  SavingsIcon,
  ShoppingIcon,
  SportIcon,
  TaxIcon,
  TransportIcon,
} from "../Icons/ExpenseIcons";

const icons = [
  <BabyIcon />,
  <WalletIcon />,
  <BillIcon />,
  <BeautyIcon />,
  <AwardIcon />,
  <HomeIcon />,
  <SalaryIcon />,
  <MoneyIcon />,
  <CardIcon />,
  <CashIcon />,
  <ClothIcon />,
  <EducationIcon />,
  <EntertainmentIcon />,
  <FoodIcon />,
  <FoodnIcon />,
  <GiftboxIcon />,
  <HealthIcon />,
  <InsuranceIcon />,
  <LotteryIcon />,
  <PhoneIcon />,
  <RentIcon />,
  <RefundIcon />,
  <SaleIcon />,
  <SavingsIcon />,
  <ShoppingIcon />,
  <SportIcon />,
  <TaxIcon />,
  <TransportIcon />,
];

const EditCategoryDialog = ({ open, category, onClose }) => {
  const [name, setName] = useState(category ? category.name : "");
  const [selectedIcon, setSelectedIcon] = useState(category ? category.icon : icons[0]);

  const { theme } = useTheme();

  const handleSave = () => {
    // Add save logic here
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          width: "500px",
          maxWidth: "90%",
          height: "450px",
          background: theme.cardBg,
          color: theme.color,
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          color: theme.color,
          fontWeight: "bold",
          background: theme.scardbg
        }}
      >
        Edit Category
      </DialogTitle>
      <DialogContent>
        {/* Name Label */}
        <Typography sx={{ mb: 1, color: theme.color, mt: 2 }}>Category Name</Typography>
        <TextField
          placeholder="Enter category name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            mb: 3,
            background: theme.inputBg,
            borderRadius: "5px",
            "& input": { color: theme.color },
          }}
        />

        {/* Icon Label */}
        <Typography sx={{ mb: 1, color: theme.color }}>Select Icon</Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 1,
            py: 1,
            px: 1,
            background: theme.scardbg,
            border: `1px solid ${theme.border}`,
            borderRadius: "5px",
            height: "100px",
          }}
        >
          {icons.map((icon, index) => (
            <Button
              key={index}
              onClick={() => setSelectedIcon(icon)}
              variant={selectedIcon === icon ? "contained" : "outlined"}
              sx={{
                minWidth: "70px",
                minHeight: "40px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: selectedIcon === icon ? theme.activeBg : theme.cardBg,
                borderColor: theme.border,
                color: theme.color,
              }}
            >
              {icon}
            </Button>
          ))}
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              color: theme.color,
              borderColor: theme.border,
              "&:hover": {
                backgroundColor: theme.hoverBg,
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{
              background: theme.primaryBg,
              color: theme.primaryText,
              "&:hover": {
                background: theme.primaryHover,
              },
            }}
          >
            Save
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategoryDialog;
