
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import ExpenseOverview from '../Components/AnalysisComponents/ExpenseOverview';
// import IncomeFlow from '../Components/AnalysisComponents/IncomeFlow';
// import AccountAnalysis from '../Components/AnalysisComponents/AccountAnalysis';
// import IncomeOverview from '../Components/AnalysisComponents/IncomeOverview';
// import ExpenseFlow from '../Components/AnalysisComponents/ExpenseFlow';
// import { useTheme } from '../Hooks/ThemeProvider';


// export default function AnalysisPage() {
  
//   const {theme} = useTheme();

//   const [value, setValue] = React.useState(0);

//   // Handle tab change
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // Render the component based on the active tab
//   const renderTabContent = () => {
//     switch (value) {
//       case 0:
//         return <ExpenseOverview />;
//       case 1:
//         return <IncomeOverview />;
//       case 2:
//         return <ExpenseFlow />;
//       case 3:
//         return <IncomeFlow />;
//       case 4:
//         return <AccountAnalysis />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box sx={{ width: '100%', color:"white", border: "1px solid" }}>
      
//       {/* Tabs navigation */}
//       <Tabs
//         sx={{ padding: '20px', mt: 2 ,maxWidth: '900px', color: theme.color,
//         margin: 'auto', borderRadius: '9px', marginBottom: '20px', background: theme.cardBg }}
//         value={value}
//         onChange={handleChange}
//         aria-label="Navigation tabs"
//         variant="scrollable"
//         scrollButtons="auto"
//         centered
//       >
//         <Tab sx={{color: theme.color, fontFamily: 'Arial, sans-serif', background: theme.scardbg}} label="Expense Overview" />
//         <Tab sx={{color: theme.color, fontFamily: 'Arial, sans-serif'}} label="Income Overview" />
//         <Tab sx={{color: theme.color, fontFamily: 'Arial, sans-serif'}} label="Expense Flow" />
//         <Tab sx={{color: theme.color, fontFamily: 'Arial, sans-serif'}} label="Income Flow" />
//         <Tab sx={{color: theme.color, fontFamily: 'Arial, sans-serif'}} label="Account Analysis" />
//       </Tabs>

//       {/* Render the content for the selected tab */}
//       <Box sx={{ mt: 2 }}>
//         {renderTabContent()}
//       </Box>
      
//     </Box>
//   );
// }
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ExpenseOverview from "../Components/AnalysisComponents/ExpenseOverview";
import IncomeFlow from "../Components/AnalysisComponents/IncomeFlow";
import AccountAnalysis from "../Components/AnalysisComponents/AccountAnalysis";
import IncomeOverview from "../Components/AnalysisComponents/IncomeOverview";
import ExpenseFlow from "../Components/AnalysisComponents/ExpenseFlow";
import { useTheme } from "../Hooks/ThemeProvider";

export default function AnalysisPage() {
  const { theme } = useTheme();

  const [value, setValue] = React.useState(0);

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Render the component based on the active tab
  const renderTabContent = () => {
    switch (value) {
      case 0:
        return <ExpenseOverview />;
      case 1:
        return <IncomeOverview />;
      case 2:
        return <ExpenseFlow />;
      case 3:
        return <IncomeFlow />;
      case 4:
        return <AccountAnalysis />;
      default:
        return null;
    }
  };

  // Styles for tabs
  const tabStyle = {
    color: theme.color,
    fontFamily: "Arial, sans-serif",
    borderRadius: "8px",
    gap: "10px",
    background: theme.cardBg,
    fontWeight: "normal",
    transition: "all 0.3s ease",
    "&.Mui-selected": {
      background: theme.scardbg, // Background for the selected tab
      fontWeight: "bold", // Make text bold for the selected tab
      color: theme.highlightColor, // Optional: Change text color for selected tab
    },
  };

  return (
    <Box sx={{ width: "100%", color: "white", border: "1px solid" }}>
      {/* Tabs navigation */}
      <Tabs
        sx={{
          padding: "20px",
          mt: 2,
          maxWidth: "900px",
          color: theme.color,
          margin: "auto",
          borderRadius: "9px",
          marginBottom: "20px",
          background: theme.scardbg,
        }}
        value={value}
        onChange={handleChange}
        aria-label="Navigation tabs"
        variant="scrollable"
        scrollButtons="auto"
        centered
      >
        <Tab sx={tabStyle} label="Expense Overview" />
        <Tab sx={tabStyle} label="Income Overview" />
        <Tab sx={tabStyle} label="Expense Flow" />
        <Tab sx={tabStyle} label="Income Flow" />
        <Tab sx={tabStyle} label="Account Analysis" />
      </Tabs>

      {/* Render the content for the selected tab */}
      <Box sx={{ mt: 2 }}>{renderTabContent()}</Box>
    </Box>
  );
}
