// import React from "react";
// import { Dialog, Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material";

// const records = [
//   { id: 1, date: "2024-12-10", time: "10:33 AM", method: "Cash", amount: "৳7500" },
//   { id: 2, date: "2024-12-10", time: "10:36 AM", method: "Cash", amount: "৳10000" },
// ];

// const CategoryDetailDialog = ({ open, category, onClose }) => {
//   if (!category) return null;

//   return (
//     <Dialog fullScreen open={open} onClose={onClose}>
//       <Box sx={{ p: 2 }}>
//         <Typography variant="h6">{category.name} - Details</Typography>
//         <Typography>You can see statistics in the Analysis section.</Typography>
//         <List>
//           {records.map((record) => (
//             <ListItem key={record.id}>
//               <ListItemText
//                 primary={`${record.date} ${record.time} - ${record.method}`}
//                 secondary={`Amount: ${record.amount}`}
//               />
//             </ListItem>
//           ))}
//         </List>
//         <Button onClick={onClose}>Close</Button>
//       </Box>
//     </Dialog>
//   );
// };

// // export default CategoryDetailDialog;
// import React from "react";
// import { Dialog, Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material";

// const records = [
//   { id: 1, date: "2024-12-10", time: "10:33 AM", method: "Cash", amount: "৳7500" },
//   { id: 2, date: "2024-12-10", time: "10:36 AM", method: "Cash", amount: "৳10000" },
// ];

// const CategoryDetailDialog = ({ open, category, onClose }) => {
//   if (!category) return null; // Ensure category exists before rendering

//   return (
//     <Dialog fullScreen open={open} onClose={onClose}>
//       <Box sx={{ p: 2 }}>
//         <Typography variant="h6">{category.name} - Details</Typography>
//         <Typography>You can see statistics in the Analysis section.</Typography>
//         <List>
//           {records.map((record) => (
//             <ListItem key={record.id}>
//               <ListItemText
//                 primary={`${record.date} ${record.time} - ${record.method}`}
//                 secondary={`Amount: ${record.amount}`}
//               />
//             </ListItem>
//           ))}
//         </List>
//         <Button onClick={onClose}>Close</Button>
//       </Box>
//     </Dialog>
//   );
// };

// export default CategoryDetailDialog;

import React from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,

} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "../../Hooks/ThemeProvider";

const CategoryDetailDialog = ({ open, category, onClose }) => {
  const { theme } = useTheme();

  // Dummy Records
  const records = [
    {
      id: 1,
      date: "Dec 21",
      time: "1:23 PM",
      method: "Cash",
      amount: -100.0,
    },
    {
      id: 2,
      date: "Dec 10",
      time: "10:42 AM",
      method: "Cash",
      amount: -100.0,
    },
    {
      id: 3,
      date: "Dec 5",
      time: "9:00 AM",
      method: "Card",
      amount: 200.0,
    },
  ];

  if (!category) return null; // Ensure category exists before rendering

  return (
    <Dialog fullScreen open={open} onClose={onClose}>
      {/* AppBar */}
      <AppBar
        position="sticky"
        sx={{
          background: theme.cardBg,
          color: theme.color,
          boxShadow: theme.boxShadow,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flex: 1, textAlign: "center" }}>
            {category.name} - Details
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Box
        sx={{
          p: 3,
          background: theme.background,
          color: theme.color,
          height: "100%",
        }}
      >
        {/* Category Info */}
        <Box
          sx={{
            mb: 3,
            p: 2,
            borderRadius: "10px",
            background: theme.cardBg,
            boxShadow: theme.boxShadow,
          }}
        >
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 1 }}
          >
            {category.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: theme.subText,
              mb: 2,
            }}
          >
            Expense category
          </Typography>
          <Box
            sx={{
              p: 2,
              borderRadius: "5px",
              background: theme.infoBg,
              color: theme.infoText,
            }}
          >
            You can see Monthly, weekly, or daily statistics in the Analysis
            section.
          </Box>
        </Box>

        {/* Record List */}
        <Typography
          variant="subtitle1"
          sx={{
            mb: 1,
            fontWeight: "bold",
            color: theme.color,
          }}
        >
          Total {records.length} records in this category
        </Typography>

        <List>
          {records.map((record) => (
            <ListItem
              key={record.id}
              sx={{
                borderBottom: `1px solid ${theme.border}`,
                paddingY: 1.5,
              }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                      sx={{
                        color: theme.subText,
                      }}
                    >
                      {record.date} {record.time}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.primaryText,
                        fontWeight: "bold",
                      }}
                    >
                      {record.method}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Typography
                    sx={{
                      textAlign: "right",
                      fontWeight: "bold",
                      color:
                        record.amount < 0
                          ? theme.expenseText
                          : theme.incomeText,
                    }}
                  >
                    {record.amount < 0 ? `-৳${-record.amount}` : `৳${record.amount}`}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        {/* Close Button */}
        {/* <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              background: theme.primaryBg,
              color: theme.primaryText,
              "&:hover": {
                background: theme.primaryHover,
              },
            }}
          >
            Close
          </Button>
        </Box> */}
      </Box>
    </Dialog>
  );
};

export default CategoryDetailDialog;

