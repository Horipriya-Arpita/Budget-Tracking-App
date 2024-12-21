// import React from "react";
// import {
//   Box,
//   Typography,
//   Stack,
//   Divider,
//   CircularProgress,
//   LinearProgress,
//   Dialog,
//   AppBar,
//   Toolbar,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// // Register necessary elements from Chart.js
// ChartJS.register(ArcElement, Tooltip, Legend);

// const CategoryDetails = ({ open, onClose, categoryData }) => {
//   const chartData = {
//     labels: ["Spent", "Remaining"],
//     datasets: [
//       {
//         data: [categoryData.amount, categoryData.remaining],
//         backgroundColor: ["#FF6384", "#CCCCCC"],
//         hoverBackgroundColor: ["#FF6384", "#CCCCCC"],
//       },
//     ],
//   };

//   const totalExpense = categoryData.amount + categoryData.remaining;

//   return (
//     <Dialog open={open} onClose={onClose} fullScreen>
//       <AppBar sx={{ position: "relative" }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//           <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
//             {categoryData.name} Details
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Box
//         sx={{
//           backgroundColor: "#1e1e1e",
//           color: "white",
//           padding: "20px",
//           borderRadius: "10px",
//           fontFamily: "Arial, sans-serif",
//           maxWidth: "900px",
//           margin: "auto",
//           paddingTop: "80px", // To avoid overlap with AppBar
//         }}
//       >
//         {/* Header */}
//         <Typography variant="h5" textAlign="center" gutterBottom>
//           {categoryData.name}
//         </Typography>

//         <Stack
//           direction="row"
//           justifyContent="space-between"
//           sx={{
//             marginBottom: "20px",
//             padding: "10px",
//             backgroundColor: "#2a2a2a",
//             borderRadius: "8px",
//           }}
//         >
//           <Typography>Spent: ৳{categoryData.amount}</Typography>
//           <Typography>Remaining: ৳{categoryData.remaining}</Typography>
//           <Typography>Total: ৳{totalExpense}</Typography>
//         </Stack>

//         <Divider sx={{ marginBottom: "20px", backgroundColor: "#424242" }} />

//         {/* Doughnut Chart */}
//         <Typography variant="h6" textAlign="center" gutterBottom>
//           Expense Breakdown
//         </Typography>

//         <Box
//           display="flex"
//           justifyContent="center"
//           marginBottom="20px"
//           sx={{
//             backgroundColor: "#2a2a2a",
//             borderRadius: "8px",
//             padding: "20px",
//           }}
//         >
//           <Doughnut
//             data={chartData}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: {
//                   position: "bottom",
//                   labels: {
//                     color: "#FFFFFF",
//                   },
//                 },
//               },
//             }}
//             height={250}
//             width={250}
//           />
//         </Box>

//         {/* Breakdown by Category */}
//         <Typography variant="h6" textAlign="center" gutterBottom>
//           Breakdown by Category
//         </Typography>

//         {categoryData.transactions.length > 0 ? (
//           categoryData.transactions.map((txn, index) => {
//             const color = txn.type === "spent" ? "#FF6384" : "#4CAF50"; // Customize colors based on type
//             const amount = txn.amount;
//             const percentage = ((amount / totalExpense) * 100).toFixed(2);

//             return (
//               <Box key={index} sx={{ marginBottom: "20px" }}>
//                 <Stack
//                   direction="row"
//                   justifyContent="space-between"
//                   alignItems="center"
//                   marginBottom="5px"
//                 >
//                   <Box display="flex" alignItems="center">
//                     <Box
//                       sx={{
//                         width: "20px",
//                         height: "20px",
//                         backgroundColor: color,
//                         borderRadius: "50%",
//                         marginRight: "10px",
//                       }}
//                     />
//                     <Typography>{txn.category}</Typography>
//                   </Box>
//                   <Typography>
//                     ৳{amount.toFixed(2)} ({percentage}%)
//                   </Typography>
//                 </Stack>
//                 <LinearProgress
//                   variant="determinate"
//                   value={percentage}
//                   sx={{
//                     height: "10px",
//                     borderRadius: "5px",
//                     backgroundColor: "#424242",
//                     "& .MuiLinearProgress-bar": { backgroundColor: color },
//                   }}
//                 />
//               </Box>
//             );
//           })
//         ) : (
//           <Box display="flex" justifyContent="center" alignItems="center">
//             <CircularProgress color="inherit" />
//             <Typography variant="body1" sx={{ ml: 2 }}>
//               No transactions found
//             </Typography>
//           </Box>
//         )}
//       </Box>
//     </Dialog>
//   );
// };

// export default CategoryDetails;




// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Dialog,
//   Box,
//   List,
//   ListItem,
//   Divider,
//   CircularProgress,
//   Slide,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// // Register necessary elements from Chart.js
// ChartJS.register(ArcElement, Tooltip, Legend);

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function CategoryDetails({ open, onClose, categoryData }) {
//   const chartData = {
//     labels: ["Spent", "Remaining"],
//     datasets: [
//       {
//         data: [categoryData.amount, categoryData.remaining],
//         backgroundColor: ["#FF6384", "#CCCCCC"],
//         hoverBackgroundColor: ["#FF6384", "#CCCCCC"],
//       },
//     ],
//   };

//   return (
//     <Dialog
//       fullScreen
//       open={open}
//       onClose={onClose}
//       TransitionComponent={Transition}
//     >
//       <AppBar sx={{ position: "relative" }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//           <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
//             Category Details
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ p: 3, bgcolor: "#222", color: "white", height: "100%" }}>
//         {/* Header with category details */}
//         <Box textAlign="center" mb={3}>
//           <Typography variant="h5">{categoryData.name}</Typography>
//           <Typography variant="subtitle1">Expense Category</Typography>
//         </Box>

//         {/* Responsive Doughnut Chart */}
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           mb={3}
//           p={2}
//           sx={{
//             bgcolor: "#2a2a2a",
//             borderRadius: "8px",
//             maxWidth: "300px", // Constrain the max width
//             margin: "0 auto",  // Center it
//             height: "300px",   // Keep chart square
//           }}
//         >
//           <Doughnut
//             data={chartData}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false, // Allows custom sizing
//               plugins: {
//                 legend: {
//                   display: false, // Hide the legend
//                 },
//               },
//             }}
//           />
//         </Box>

//         <Typography textAlign="center" variant="h4" mb={2}>
//           {((categoryData.amount / categoryData.total) * 100).toFixed(2)}%
//         </Typography>
//         <Typography textAlign="center" variant="subtitle1" mb={3}>
//           of total expense in this period
//         </Typography>

//         <Divider sx={{ bgcolor: "#444", mb: 3 }} />

//         {/* List of Transactions */}
//         <Typography variant="h6" mb={2}>
//           Records
//         </Typography>
//         <List>
//           {categoryData.transactions.length > 0 ? (
//             categoryData.transactions.map((txn, index) => (
//               <React.Fragment key={index}>
//                 <ListItem sx={{ justifyContent: "space-between" }}>
//                   <Box>
//                     <Typography variant="body1">
//                       {new Date(txn.date).toLocaleDateString()} - {txn.time}
//                     </Typography>
//                     <Typography variant="caption">{txn.method}</Typography>
//                   </Box>
//                   <Typography variant="body2" color="error">
//                     -৳{txn.amount}
//                   </Typography>
//                 </ListItem>
//                 <Divider sx={{ bgcolor: "#444" }} />
//               </React.Fragment>
//             ))
//           ) : (
//             <Box display="flex" justifyContent="center" alignItems="center">
//               <CircularProgress color="inherit" />
//               <Typography variant="body1" sx={{ ml: 2 }}>
//                 No transactions found
//               </Typography>
//             </Box>
//           )}
//         </List>
//       </Box>
//     </Dialog>
//   );
// }

import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Dialog,
  Box,
  List,
  ListItem,
  Divider,
  CircularProgress,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTheme } from "../../Hooks/ThemeProvider" // Import useTheme hook

// Register necessary elements from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CategoryDetails({ open, onClose, categoryData }) {
  const { theme } = useTheme(); // Access theme

  const chartData = {
    labels: ["Spent", "Remaining"],
    datasets: [
      {
        data: [categoryData.amount, categoryData.remaining],
        backgroundColor: theme.categoryDetails.chartBackgroundColor,
        hoverBackgroundColor: theme.categoryDetails.chartHoverBackgroundColor,
      },
    ],
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative", bgcolor: theme.categoryDetails.appBarColor }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" color={theme.categoryDetails.textColor}>
            Category Details
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3, bgcolor: theme.categoryDetails.background, color: theme.categoryDetails.textColor, height: "100%" }}>
        {/* Header with category details */}
        <Box textAlign="center" mb={3}>
          <Typography variant="h5">{categoryData.name}</Typography>
          <Typography variant="subtitle1">Expense Category</Typography>
        </Box>

        {/* Responsive Doughnut Chart */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={3}
          p={2}
          sx={{
            bgcolor: theme.categoryDetails.background,
            borderRadius: "8px",
            maxWidth: "300px", // Constrain the max width
            margin: "0 auto", // Center it
            height: "300px", // Keep chart square
          }}
        >
          <Doughnut
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false, // Allows custom sizing
              plugins: {
                legend: {
                  display: false, // Hide the legend
                },
              },
            }}
          />
        </Box>

        <Typography textAlign="center" variant="h4" mb={2}>
          {((categoryData.amount / categoryData.total) * 100).toFixed(2)}%
        </Typography>
        <Typography textAlign="center" variant="subtitle1" mb={3}>
          of total expense in this period
        </Typography>

        <Divider sx={{ bgcolor: theme.categoryDetails.dividerColor, mb: 3 }} />

        {/* List of Transactions */}
        <Typography variant="h6" mb={2}>
          Records
        </Typography>
        <List>
          {categoryData.transactions.length > 0 ? (
            categoryData.transactions.map((txn, index) => (
              <React.Fragment key={index}>
                <ListItem sx={{ justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="body1">
                      {new Date(txn.date).toLocaleDateString()} - {txn.time}
                    </Typography>
                    <Typography variant="caption">{txn.method}</Typography>
                  </Box>
                  <Typography variant="body2" color={theme.categoryDetails.errorTextColor}>
                    -৳{txn.amount}
                  </Typography>
                </ListItem>
                <Divider sx={{ bgcolor: theme.categoryDetails.dividerColor }} />
              </React.Fragment>
            ))
          ) : (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress color="inherit" />
              <Typography variant="body1" sx={{ ml: 2 }}>
                No transactions found
              </Typography>
            </Box>
          )}
        </List>
      </Box>
    </Dialog>
  );
}
