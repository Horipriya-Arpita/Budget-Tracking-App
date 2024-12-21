// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   ToggleButton,
//   ToggleButtonGroup,
//   Typography,
//   TextField,
//   IconButton,
//   Grid,
// } from "@mui/material";
// import { Close as CloseIcon, Check as CheckIcon } from "@mui/icons-material";
// import { evaluate } from "mathjs"; // Import mathjs

// export default function AddPage() {
//   const [transactionType, setTransactionType] = useState("expense");
//   const [amount, setAmount] = useState("0");
//   const [notes, setNotes] = useState("");

//   const handleTransactionTypeChange = (event, newType) => {
//     if (newType !== null) {
//       setTransactionType(newType);
//     }
//   };

//   // Updated Logic for Calculator
//   const handleKeypadInput = (value) => {
//     if (value === "AC") {
//       // Clear all input
//       setAmount("0");
//     } else if (value === "✖") {
//       // Clear the last digit
//       setAmount((prev) =>
//         prev.length > 1 ? prev.slice(0, -1) : "0"
//       );
//     } else if (value === "=") {
//       try {
//         // Safely evaluate the expression using mathjs
//         setAmount((prev) => {
//           const result = evaluate(prev);
//           return result.toString();
//         });
//       } catch {
//         setAmount("Error");
//       }
//     } else {
//       setAmount((prev) =>
//         prev === "0" || prev === "Error" ? value : prev + value
//       );
//     }
//   };

//   // Keypad Values
//   const keypadValues = [
//     ["AC", "✖", "+", "-"],
//     ["7", "8", "9", "*"],
//     ["4", "5", "6", "/"],
//     ["1", "2", "3", "="],
//     ["0", ".", ""],
//   ];

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#3c3c3c",
//         color: "white",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         padding: "10px",
//       }}
//     >
//       {/* Header */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <IconButton>
//           <CloseIcon sx={{ color: "#FFD700" }} />
//         </IconButton>
//         <Typography variant="h6">EXPENSE</Typography>
//         <IconButton>
//           <CheckIcon sx={{ color: "#FFD700" }} />
//         </IconButton>
//       </Box>

//       {/* Transaction Type Toggle */}
//       <ToggleButtonGroup
//         value={transactionType}
//         exclusive
//         onChange={handleTransactionTypeChange}
//         sx={{
//           justifyContent: "center",
//           marginBottom: "10px",
//         }}
//       >
//         <ToggleButton value="income" sx={{ color: "white" }}>
//           INCOME
//         </ToggleButton>
//         <ToggleButton value="expense" sx={{ color: "white" }}>
//           EXPENSE
//         </ToggleButton>
//         <ToggleButton value="transfer" sx={{ color: "white" }}>
//           TRANSFER
//         </ToggleButton>
//       </ToggleButtonGroup>

//       {/* Account and Category Buttons */}
//       <Box display="flex" justifyContent="space-between" marginBottom="10px">
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#565656",
//             color: "#FFD700",
//             width: "48%",
//           }}
//         >
//           <Typography>Account</Typography>
//         </Button>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#565656",
//             color: "#FFD700",
//             width: "48%",
//           }}
//         >
//           <Typography>Category</Typography>
//         </Button>
//       </Box>

//       {/* Notes Section */}
//       <TextField
//         placeholder="Add notes"
//         multiline
//         rows={3}
//         variant="filled"
//         sx={{
//           backgroundColor: "#565656",
//           borderRadius: "8px",
//           marginBottom: "10px",
//           "& .MuiInputBase-root": { color: "white" },
//         }}
//         value={notes}
//         onChange={(e) => setNotes(e.target.value)}
//       />

//       {/* Amount Display */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "#565656",
//           borderRadius: "8px",
//           padding: "10px",
//           fontSize: "2rem",
//           marginBottom: "10px",
//         }}
//       >
//         {amount}
//       </Box>

//       {/* Keypad */}
//       <Box>
//         {keypadValues.map((row, rowIndex) => (
//           <Grid container spacing={1} key={rowIndex} sx={{ marginBottom: "5px" }}>
//             {row.map((key, colIndex) =>
//               key ? (
//                 <Grid item xs={3} key={colIndex}>
//                   <Button
//                     variant="contained"
//                     sx={{
//                       width: "100%",
//                       backgroundColor: "#565656",
//                       color: "#FFD700",
//                       fontSize: "1.5rem",
//                     }}
//                     onClick={() => handleKeypadInput(key)}
//                   >
//                     {key}
//                   </Button>
//                 </Grid>
//               ) : (
//                 <Grid item xs={3} key={colIndex}></Grid>
//               )
//             )}
//           </Grid>
//         ))}
//       </Box>

//       {/* Footer */}
//       <Box display="flex" justifyContent="space-between">
//         <Typography>Dec 12, 2024</Typography>
//         <Typography>10:26 AM</Typography>
//       </Box>
//     </Box>
//   );
// }

import React, { useState } from "react";
import { Box, Button, ToggleButton, ToggleButtonGroup, Typography, TextField, IconButton, Grid } from "@mui/material";
import { Close as CloseIcon, Check as CheckIcon } from "@mui/icons-material";
import { useTheme } from "../Hooks/ThemeProvider"; // Importing useTheme hook
import { evaluate } from "mathjs"; // Import mathjs
import Autocomplete from '@mui/material/Autocomplete';

const Accounts = [
  {label: 'Cash'},
  {label: 'Card'},
  {label: 'Savings'}
]

export default function AddPage() {
  const { theme } = useTheme(); // Accessing theme
  const [transactionType, setTransactionType] = useState("expense");
  const [amount, setAmount] = useState("0");
  const [notes, setNotes] = useState("");

  const handleTransactionTypeChange = (event, newType) => {
    if (newType !== null) {
      setTransactionType(newType);
    }
  };

  // Updated Logic for Calculator
  const handleKeypadInput = (value) => {
    if (value === "AC") {
      // Clear all input
      setAmount("0");
    } else if (value === "✖") {
      // Clear the last digit
      setAmount((prev) =>
        prev.length > 1 ? prev.slice(0, -1) : "0"
      );
    } else if (value === "=") {
      try {
        // Safely evaluate the expression using mathjs
        setAmount((prev) => {
          const result = evaluate(prev);
          return result.toString();
        });
      } catch {
        setAmount("Error");
      }
    } else {
      setAmount((prev) =>
        prev === "0" || prev === "Error" ? value : prev + value
      );
    }
  };

  // Keypad Values
  const keypadValues = [
    ["AC", "✖", "+", "-"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "/"],
    ["1", "2", "3", "="],
    ["0", ".", ""],
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.addPage.background,
        color: theme.addPage.textColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton>
          <CloseIcon sx={{ color: theme.addPage.textColor }} />
        </IconButton>
        <Typography variant="h6">EXPENSE</Typography>
        <IconButton>
          <CheckIcon sx={{ color: theme.addPage.textColor }} />
        </IconButton>
      </Box>

      {/* Transaction Type Toggle */}
      <ToggleButtonGroup
        value={transactionType}
        exclusive
        onChange={handleTransactionTypeChange}
        sx={{
          justifyContent: "center",
          marginBottom: "10px",
          background: theme.addPage.keypadButtonBackground
        }}
      >
        <ToggleButton value="income" sx={{ color: theme.addPage.textColor }}>
          INCOME
        </ToggleButton>
        <ToggleButton value="expense" sx={{ color: theme.addPage.textColor }}>
          EXPENSE
        </ToggleButton>
        <ToggleButton value="transfer" sx={{ color: theme.addPage.textColor }}>
          TRANSFER
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Account and Category Buttons */}
      <Box display="flex" justifyContent="space-between" marginBottom="10px">
        <Button
          variant="contained"
          sx={{
            background: theme.addPage.buttonBackground,
            color: theme.addPage.buttonTextColor,
            width: "48%",
          }}
        >
          {/* <Typography>Account</Typography> */}
          <Autocomplete
            disablePortal
            options={Accounts}
            sx={{ margin: "0px 0px" }}
            renderInput={(params) => <TextField {...params} label="Account" />}
          />

        </Button>
        <Button
          variant="contained"
          sx={{
            background: theme.addPage.buttonBackground,
            color: theme.addPage.buttonTextColor,
            width: "48%",
          }}
        >
          <Typography>Category</Typography>
        </Button>
      </Box>

      {/* Notes Section */}
      <TextField
        placeholder="Add notes"
        multiline
        rows={3}
        variant="filled"
        sx={{
          background: theme.addPage.buttonBackground,
          borderRadius: "8px",
          marginBottom: "10px",
          "& .MuiInputBase-root": { color: theme.addPage.textColor },
        }}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {/* Amount Display */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: theme.addPage.buttonBackground,
          borderRadius: "8px",
          padding: "10px",
          fontSize: "2rem",
          marginBottom: "10px",
        }}
      >
        {amount}
      </Box>

      {/* Keypad */}
      <Box>
        {keypadValues.map((row, rowIndex) => (
          <Grid container spacing={1} key={rowIndex} sx={{ marginBottom: "5px" }}>
            {row.map((key, colIndex) =>
              key ? (
                <Grid item xs={3} key={colIndex}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      background: theme.addPage.keypadButtonBackground,
                      color: theme.addPage.keypadButtonTextColor,
                      fontSize: "1.5rem",
                    }}
                    onClick={() => handleKeypadInput(key)}
                  >
                    {key}
                  </Button>
                </Grid>
              ) : (
                <Grid item xs={3} key={colIndex}></Grid>
              )
            )}
          </Grid>
        ))}
      </Box>

      {/* Footer */}
      <Box display="flex" justifyContent="space-between">
        <Typography>Dec 12, 2024</Typography>
        <Typography>10:26 AM</Typography>
      </Box>
    </Box>
  );
}
