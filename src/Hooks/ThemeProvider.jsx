// ThemeProvider.jsx
import React, { createContext, useState, useContext } from 'react';


// Create a Context for the theme
const ThemeContext = createContext();
// ThemeProvider.jsx
const themes = {
  light: {
    background: 'linear-gradient(180deg, #F0F8FF 0%, #dfe3f5 50%, #bbc6f2 100%)',
    //background: 'linear-gradient(180deg, #f0c6ca 10%, #ffdeec 60%, #f0c6ca 100%)',
    color: '#003366',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    formBg: 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%)' ,//'#F8F9FD',
    inputBg: '#ffffff',
    inputBorder: '#A0D7FF',
    inputShadow: '#cff0ff',
    buttonBg: 'linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%)',
    buttonHover: '#12B1D1',
    socialButtonBg: 'linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%)',
    linkColor: '#0099ff',
    //cardBg: 'linear-gradient(45deg, #fde9f7 10%, #ffc7e2 60%, #fce3ee 100%)',//'#e1b4c1',
    cardBg: 'linear-gradient(45deg, #ebf7ff 10%, #bae1f7 60%, #f4ebfa 100%)',//'#e1b4c1',
    cardText: '#003366',
    divider: '#d1d5db',
    progressBarBg: '#e5e7eb',
    progressBarColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4CAF50'],
    chartLegendColor: '#333333',
    headerTextColor: '#003366',
    buttonColor: 'linear-gradient(180deg, #23487d 0%, #10376e 90%, #031a3b 100%)',

    //scardbg: 'linear-gradient(180deg, #f79cb7 0%, #f0b1c4 90%, #f081a2 100%)',
    scardbg: 'linear-gradient(180deg, #b3d2ff 0%, #6da7f7 90%, #2158a6 100%)',


    detailDialog: {
      appBarColor: "#FF7043",
      expenseBgColor: "#FF7043",
      expenseTextColor: "#ffffff",
      contentBgColor: "#f5f5f5",
      contentTextColor: "#000000",
      dividerColor: "#e0e0e0",
      accountBgColor: "#A5D6A7",
      accountTextColor: "#2E7D32",
      categoryBgColor: "#FFCC80",
      categoryTextColor: "#E65100",
    },

    addPage: {
      background: 'linear-gradient(180deg, #F0F8FF 0%, #D0EFFF 50%, #A0D7FF 100%)',//"#ffffff", // Light background
      textColor: "#000000", // Default text color
      buttonBackground: "#F0F0F0", // Button background color
      buttonTextColor: "#000000", // Button text color
      keypadButtonBackground: "#D3D3D3", // Keypad button color
      keypadButtonTextColor: "#000000", // Keypad button text color
    },

    categoryList: {
      background: 'linear-gradient(180deg, #D0EFFF 0%, #A0D7FF 100%)',//"#ffffff", // Light background
      textColor: "#003366", // Text color for category names
      actionButtonColor: "#000000", // Color for the action buttons
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for cards
    },

    categoryPage: {
      background: 'linear-gradient(180deg, #F0F8FF 0%, #D0EFFF 50%, #A0D7FF 100%)',//'#ffffff', // Light background
      titleColor: '#003366', // Title text color
      subTitleColor: '#4CAF50', // Subheading color (for income/expense categories)
      textColor: '#003366', // General text color
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)', // Shadow for cards
    },

    accountPage: {
      background: 'linear-gradient(180deg, #F0F8FF 0%, #D0EFFF 50%, #A0D7FF 100%)',//'#ffffff', // Light background
      cardBg: 'linear-gradient(180deg, #D0EFFF 0%, #A0D7FF 100%)',//'#ffffff', // Card background color
      cardText: '#003366', // Card text color
      iconColor: '#A0D7FF', // Default icon color
      iconBg: '#E0F7FA', // Light icon background
      recordText: '#003366', // Record text color
      recordBalance: '#4CAF50', // Income color
      recordExpense: '#F44336', // Expense color
      arrowColor: '#003366', // Arrow color
    },

    budgetPage: {
      cardBg: 'linear-gradient(180deg, #F0F8FF 0%, #D0EFFF 50%, #A0D7FF 100%)',//'#ffffff',
      cardText: '#003366',
      progressBarColor: '#FF6384',
      cardHeaderBg: '#f0f0f0',
      progressBg: '#e5e7eb',
      buttonColor: '#007bff',
      typographyColor: '#003366',
    },

    expenseOverview: {
      cardBg: 'linear-gradient(180deg, #F0F8FF 0%, #D0EFFF 50%, #A0D7FF 100%)',//'#ffffff',
      cardText: '#003366',
      chartBg: 'linear-gradient(180deg, #D0EFFF 0%, #A0D7FF 100%)',//'#f3f3f3',
      chartBorder: '#ddd',
      typographyColor: '#003366',
      progressBarBg: '#e5e7eb',
    },

    navbar :
    {
      //navbarBg: 'linear-gradient(180deg, #ffc7e2 2%, #fde9f7 20%, #ffc7e2 80%, #f7a6be 100%)',//'#e1b4c1',
      navbarBg: 'linear-gradient(180deg, #b3d2ff 0%, #6da7f7 90%, #2158a6 100%)',
      navbarColor: '#fff',
      //navItemBg: 'linear-gradient(180deg, #f79cb7 0%, #f0b1c4 90%, #f081a2 100%)',
      navItemBg: 'linear-gradient(180deg, #23487d 0%, #10376e 90%, #031a3b 100%)',//      '#B0D9FF',
      navItemHoverBg: 'linear-gradient(90deg, #8CCAF7 0%, #66B3FF 100%)',
    },

    recordPage: {
      background: 'linear-gradient(180deg, #F0F8FF 0%, #D0EFFF 50%, #A0D7FF 100%)',//'#F8F9FD',
      cardBackground: 'linear-gradient(180deg, #D0EFFF 0%, #A0D7FF 100%)',//'#FFFFFF',
      cardText: '#003366',
      incomeColor: '#4CAF50',
      expenseColor: '#F44336',
      summaryText: '#003366',
      dateText: '#003366',
      fabBackground: '#0099FF',
    },

    categoryDetails: {
      background: 'linear-gradient(180deg, #D0EFFF 0%, #A0D7FF 100%)',//"#ffffff",
      textColor: "#000000",
      appBarColor: "#f5f5f5",
      dividerColor: "#cccccc",
      chartBackgroundColor: ["#FF6384", "#E0E0E0"],
      chartHoverBackgroundColor: ["#FF6384", "#CCCCCC"],
      errorTextColor: "#d32f2f",
    },

  },


  dark: {
    background: 'linear-gradient(180deg, #050A13 0%, #0A1A2B 100%)',
    color: '#E0E6ED',
    
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',//'0px 4px 8px rgba(255, 255, 255, 0)'
    formBg: '#0A1623',
    inputBg: '#1E2A38',
    inputBorder: '#3E577A',
    inputShadow: '#112f4c',
    buttonBg: 'linear-gradient(45deg, #1E2E3E 0%, #3E577A 100%)',
    buttonHover: '#2C3F57',
    socialButtonBg: 'linear-gradient(45deg, #131b24 0%, #2C3F57 100%)',
    linkColor: '#66B3FF',
    // cardBg: '#1e1e1e',
    cardBg: 'linear-gradient(45deg, #03203b 10%, #041930 60%, #072b52 100%)',//'#e1b4c1',
    cardText: '#ffffff',
    divider: '#424242',
    progressBarBg: '#2a2a2a',
    progressBarColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4CAF50'],
    chartLegendColor: '#ffffff',
    headerTextColor: '#ffffff',
    buttonColor: '#3f51b5',
    scardbg: 'linear-gradient(180deg, #081a33 0%, #041021 90%, #020e1f 100%)',


    detailDialog: {
      appBarColor: "#FF7043",
      expenseBgColor: "#FF7043",
      expenseTextColor: "#ffffff",
      contentBgColor: "#4E4E4E",
      contentTextColor: "#ffffff",
      dividerColor: "#ffffff",
      accountBgColor: "#558B2F",
      accountTextColor: "#C8E6C9",
      categoryBgColor: "#FF8A65",
      categoryTextColor: "#BF360C",
    },

    addPage: {
      background: "linear-gradient(180deg, #050A13 0%, #0A1A2B 100%)",//"#0A1623",//"#121212", // Dark background
      textColor: "#ffffff", // Default text color
      buttonBackground: "linear-gradient(180deg, #1E2A38 0%, #0E1B2A 100%)",//"#565656", // Button background color
      buttonTextColor: "#FFD700", // Button text color
      keypadButtonBackground: "linear-gradient(180deg, #2C3F57 0%, #3E577A 100%)",//"#565656", // Keypad button color
      keypadButtonTextColor: "#FFD700", // Keypad button text color
    },

    categoryList: {
      background: "linear-gradient(180deg, #1E2A38 0%, #0E1B2A 100%)",// "#121212", // Dark background
      textColor: "#ffffffcc", // Text color for category names
      actionButtonColor: "#ffffff", // Color for the action buttons
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)", // Shadow for cards
    },

    categoryPage: {
      background: 'linear-gradient(180deg, #050A13 0%, #0A1A2B 100%)',//'#121212', // Dark background
      titleColor: '#ffffffcc', // Title text color
      subTitleColor: '#4CAF50', // Subheading color (for income/expense categories)
      textColor: '#ffffff', // General text color
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)', // Shadow for cards
    },

    accountPage: {
      background: 'linear-gradient(180deg, #050A13 0%, #0A1A2B 100%)',//'#121212', // Dark background
      cardBg: 'linear-gradient(180deg, #1E2A38 0%, #0E1B2A 100%)',//'#2c2c2c', // Dark card background
      cardText: '#ffffff', // Dark card text color
      iconColor: '#3F51B5', // Default icon color
      iconBg: '#2C3E50', // Dark icon background
      recordText: '#ffffffcc', // Record text color
      recordBalance: '#4CAF50', // Income color
      recordExpense: '#F44336', // Expense color
      arrowColor: '#ffffff99', // Arrow color
    },

    budgetPage: {
      cardBg: 'linear-gradient(180deg, #050A13 0%, #0A1A2B 100%)',//'#2a2a2a',
      scardBg: 'linear-gradient(180deg, #1E2A38 0%, #0E1B2A 100%)',
      cardText: '#ffffff',
      progressBarColor: '#FF6384',
      cardHeaderBg: '#1e1e1e',
      progressBg: '#333',
      buttonColor: '#3f51b5',
      typographyColor: '#ffffff',
    },

    expenseOverview: {
      cardBg: 'linear-gradient(180deg, #050A13 0%, #0A1A2B 100%)',//'#2a2a2a',
      cardText: '#ffffff',
      chartBg: 'linear-gradient(180deg, #1E2A38 0%, #0E1B2A 100%)',//'#1e1e1e',
      chartBorder: '#333',
      typographyColor: '#ffffff',
      progressBarBg: '#2a2a2a',
    },

    navbar :
    {
      navbarBg: 'linear-gradient(45deg, #03203b 10%, #041930 60%, #072b52 100%)',//'linear-gradient(180deg, #1E2A38 0%, #0E1B2A 100%)',
      navbarColor: '#ffff',//'#ffff',
      navItemBg: '#1E2E3E',
      navItemHoverBg: 'linear-gradient(90deg, #2C3F57 0%, #3E577A 100%)',
    },

    recordPage: {
      background: 'linear-gradient(180deg, #050A13 0%, #0A1A2B 100%)',//'#121212',
      cardBackground: 'linear-gradient(180deg, #1E2A38 0%, #0E1B2A 100%)',//'#2c2c2c',
      cardText: '#FFFFFF',
      incomeColor: '#4CAF50',
      expenseColor: '#F44336',
      summaryText: '#FFFFFFCC',
      dateText: '#FFFFFFCC',
      fabBackground: '#4CAF50',
    },

    categoryDetails: {
      background: "#222222",
      textColor: "#ffffff",
      appBarColor: "#121212",
      dividerColor: "#444444",
      chartBackgroundColor: ["#FF6384", "#666666"],
      chartHoverBackgroundColor: ["#FF6384", "#444444"],
      errorTextColor: "#ff5252",
    },

  }
};


// Create a ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      <div style={{ background: themes[theme].background, color: themes[theme].color, minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
