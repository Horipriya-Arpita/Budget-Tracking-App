

// import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// //import CategoryList from "./CategoryList";
// //import CategoryDetailDialog from "./CategoryDetailDialog";
// import CategoryList from "../Components/CategoryComponents/CategoryList"
// import CategoryDetailDialog from "../Components/CategoryComponents/CategoryDetailDialogue";
// import EditCategoryDialog from "../Components/CategoryComponents/EditCategoryDialogue";

// //import React, { useState } from "react";
// //import { Box, Typography } from "@mui/material";
// //import CategoryList from "./CategoryList";
// //import CategoryDetailDialog from "./CategoryDetailDialog";
// //import EditCategoryDialog from "./EditCategoryDialog";

// const CategoryPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null); // Holds the currently selected category
//   const [isDetailOpen, setIsDetailOpen] = useState(false); // Controls visibility of CategoryDetailDialog
//   const [isEditOpen, setIsEditOpen] = useState(false); // Controls visibility of EditCategoryDialog

//   // Handle when a list item (category) is clicked
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category); // Set the selected category
//     setIsDetailOpen(true); // Open the detail dialog
//   };

//   // Handle when the Edit button is clicked
//   const handleEditClick = (category) => {
//     console.log("Category clicked:", category);
//     setSelectedCategory(category); // Set the selected category
//     setIsEditOpen(true); // Open the edit dialog
//   };

//   return (
//     <Box>
//       <Typography variant="h5" sx={{ textAlign: "center", my: 2 }}>
//         Categories
//       </Typography>
//       <Box>
//         <Typography variant="h6" sx={{ my: 1 }}>
//           Income Categories
//         </Typography>
//         <CategoryList
//           type="income"
//           onCategoryClick={handleCategoryClick} // Pass click handler for detail dialog
//           onEditClick={handleEditClick} // Pass click handler for edit dialog
//         />
//         <Typography variant="h6" sx={{ my: 1 }}>
//           Expense Categories
//         </Typography>
//         <CategoryList
//           type="expense"
//           onCategoryClick={handleCategoryClick}
//           onEditClick={handleEditClick}
//         />
//       </Box>

//       {/* Category Detail Dialog */}
//       <CategoryDetailDialog
//         open={isDetailOpen} // Controls visibility
//         category={selectedCategory} // Pass selected category
//         onClose={() => setIsDetailOpen(false)} // Close handler
//       />

//       {/* Edit Category Dialog */}
//       <EditCategoryDialog
//         open={isEditOpen} // Controls visibility
//         category={selectedCategory} // Pass selected category
//         onClose={() => setIsEditOpen(false)} // Close handler
//       />
//     </Box>
//   );
// };

// export default CategoryPage;

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../Hooks/ThemeProvider"; // Importing useTheme hook
import CategoryList from "../Components/CategoryComponents/CategoryList";
import CategoryDetailDialog from "../Components/CategoryComponents/CategoryDetailDialogue";
import EditCategoryDialog from "../Components/CategoryComponents/EditCategoryDialogue";

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  
  const { theme } = useTheme(); // Accessing theme

  // Handle when a list item (category) is clicked
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set the selected category
    setIsDetailOpen(true); // Open the detail dialog
  };

  // Handle when the Edit button is clicked
  const handleEditClick = (category) => {
    setSelectedCategory(category); // Set the selected category
    setIsEditOpen(true); // Open the edit dialog
  };

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

<Box sx={{ backgroundColor: theme.categoryPage.background, minHeight: "100vh", padding: 2 }}>
      <Typography variant="h5" sx={{ textAlign: "center", my: 2, color: theme.categoryPage.titleColor }}>
        Categories
      </Typography>

      <Box>
        <Typography variant="h6" sx={{ my: 1, color: theme.categoryPage.subTitleColor }}>
          Income Categories
        </Typography>
        <CategoryList
          type="income"
          onCategoryClick={handleCategoryClick}
          onEditClick={handleEditClick}
        />
        
        <Typography variant="h6" sx={{ my: 1, color: theme.categoryPage.subTitleColor }}>
          Expense Categories
        </Typography>
        <CategoryList
          type="expense"
          onCategoryClick={handleCategoryClick}
          onEditClick={handleEditClick}
        />
      </Box>

      {/* Category Detail Dialog */}
      <CategoryDetailDialog
        open={isDetailOpen}
        category={selectedCategory}
        onClose={() => setIsDetailOpen(false)}
      />

      {/* Edit Category Dialog */}
      <EditCategoryDialog
        open={isEditOpen}
        category={selectedCategory}
        onClose={() => setIsEditOpen(false)}
      />
    </Box>

      </Box>
    </div>
    
  );
};

export default CategoryPage;
