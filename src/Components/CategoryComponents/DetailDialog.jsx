// import React from 'react';
// import Dialog from '@mui/material/Dialog';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';

// export default function DetailDialog({ open, onClose, rowData }) {
//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       fullWidth
//       maxWidth="sm"
//       PaperProps={{
//         style: {
//           borderRadius: 15,
//           overflow: 'hidden',
//         },
//       }}
//     >
//       <AppBar
//         position="relative"
//         sx={{
//           backgroundColor: '#FF7043',
//           boxShadow: 'none',
//           padding: '10px 16px',
//         }}
//       >
//         <Toolbar
//           disableGutters
//           sx={{ display: 'flex', justifyContent: 'space-between' }}
//         >
//           <IconButton edge="start" color="inherit" onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//           <Box>
//             <IconButton color="inherit">
//               <DeleteIcon />
//             </IconButton>
//             <IconButton color="inherit">
//               <EditIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Box
//         sx={{
//           backgroundColor: '#FF7043',
//           color: 'white',
//           textAlign: 'center',
//           padding: 2,
//         }}
//       >
//         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//           EXPENSE
//         </Typography>
//         <Typography
//           variant="h4"
//           sx={{ fontWeight: 'bold', margin: '10px 0' }}
//         >
//           -৳{rowData?.amount || '0.00'}
//         </Typography>
//         <Typography>{rowData?.date || 'N/A'}</Typography>
//       </Box>

//       <Box
//         sx={{
//           padding: 3,
//           backgroundColor: '#4E4E4E',
//           color: 'white',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             marginBottom: 2,
//           }}
//         >
//           <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//             Account
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               padding: '5px 10px',
//               borderRadius: 5,
//               backgroundColor: '#A5D6A7',
//               color: '#2E7D32',
//             }}
//           >
//             {rowData?.account || 'N/A'}
//           </Typography>
//         </Box>
//         <Divider sx={{ backgroundColor: 'white', margin: '10px 0' }} />
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             marginBottom: 2,
//           }}
//         >
//           <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//             Category
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               padding: '5px 10px',
//               borderRadius: 5,
//               backgroundColor: '#FFCC80',
//               color: '#E65100',
//             }}
//           >
//             {rowData?.category || 'N/A'}
//           </Typography>
//         </Box>
//         <Divider sx={{ backgroundColor: 'white', margin: '10px 0' }} />
//         <Box>
//           <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
//             {rowData?.description || 'No description provided'}
//           </Typography>
//         </Box>
//       </Box>
//     </Dialog>
//   );
// }


import React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
//import { useTheme } from "../Hooks/ThemeProvider"; // Import useTheme hook
import { useTheme } from "../../Hooks/ThemeProvider";

export default function DetailDialog({ open, onClose, rowData }) {
  const { theme } = useTheme(); // Access theme

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          borderRadius: 15,
          overflow: "hidden",
        },
      }}
    >
      {/* AppBar */}
      <AppBar
        position="relative"
        sx={{
          backgroundColor: theme.detailDialog.appBarColor,
          boxShadow: "none",
          padding: "10px 16px",
        }}
      >
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <IconButton edge="start" color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Box>
            <IconButton color="inherit">
              <DeleteIcon />
            </IconButton>
            <IconButton color="inherit">
              <EditIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Expense Section */}
      <Box
        sx={{
          backgroundColor: theme.detailDialog.expenseBgColor,
          color: theme.detailDialog.expenseTextColor,
          textAlign: "center",
          padding: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          EXPENSE
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", margin: "10px 0" }}
        >
          -৳{rowData?.amount || "0.00"}
        </Typography>
        <Typography>{rowData?.date || "N/A"}</Typography>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          padding: 3,
          backgroundColor: theme.detailDialog.contentBgColor,
          color: theme.detailDialog.contentTextColor,
        }}
      >
        {/* Account */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Account
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              borderRadius: 5,
              backgroundColor: theme.detailDialog.accountBgColor,
              color: theme.detailDialog.accountTextColor,
            }}
          >
            {rowData?.account || "N/A"}
          </Typography>
        </Box>
        <Divider sx={{ backgroundColor: theme.detailDialog.dividerColor, margin: "10px 0" }} />

        {/* Category */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Category
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              borderRadius: 5,
              backgroundColor: theme.detailDialog.categoryBgColor,
              color: theme.detailDialog.categoryTextColor,
            }}
          >
            {rowData?.category || "N/A"}
          </Typography>
        </Box>
        <Divider sx={{ backgroundColor: theme.detailDialog.dividerColor, margin: "10px 0" }} />

        {/* Description */}
        <Box>
          <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            {rowData?.description || "No description provided"}
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
}
