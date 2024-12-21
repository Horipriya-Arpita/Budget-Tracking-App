import React, { useState } from "react";
import { Button } from "@mui/material";
import CategoryDetails from "./CategoryDetails";

export default function ViewCategory () {
  const [open, setOpen] = useState(false);

  const categoryData = {
    name: "Education",
    amount: 600,
    total: 700,
    remaining: 100,
    transactions: [
      {
        date: "2024-12-10",
        time: "10:38 AM",
        method: "Cash",
        amount: 600,
      },
    ],
  };

  return (
    <div style={{marginTop: "20px", display: "flex", justifyContent:"end"}}>
      <Button variant="contained" onClick={() => setOpen(true)}>
        View 
      </Button>
      <CategoryDetails
        open={open}
        onClose={() => setOpen(false)}
        categoryData={categoryData}
      />
    </div>
  );
}
