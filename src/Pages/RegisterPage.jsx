import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Email, Visibility, Person } from "@mui/icons-material";
import { useTheme } from "../Hooks/ThemeProvider";

const RegisterPage = () => {

  const { theme } = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ background: theme.background }}
    >
      <Box
        display="flex"
        boxShadow={3}
        borderRadius={2}
        overflow="hidden"
        maxWidth="900px"
        width="100%"
        sx={{ background: theme.cardBg }}
      >
        {/* Left Form */}
        <Box flex={1} p={4}>
          <Typography variant="h4" fontWeight="bold" mb={1}>
            Create an Account
          </Typography>
          <Typography variant="body2" mb={3}>
            Already have an account?{" "}
            <Link href="#" underline="none" color="primary" fontWeight="bold">
              Sign in here
            </Link>
          </Typography>

          {/* Name Input */}
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            margin="normal"
            InputProps={{
              startAdornment: <Person color="action" sx={{ mr: 1 }} />,
            }}
          />

          {/* Email Input */}
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            margin="normal"
            InputProps={{
              startAdornment: <Email color="action" sx={{ mr: 1 }} />,
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            margin="normal"
            type="password"
            InputProps={{
              startAdornment: <Visibility color="action" sx={{ mr: 1 }} />,
            }}
          />

          {/* Confirm Password Input */}
          <TextField
            fullWidth
            variant="outlined"
            label="Confirm Password"
            margin="normal"
            type="password"
            InputProps={{
              startAdornment: <Visibility color="action" sx={{ mr: 1 }} />,
            }}
          />

          {/* Agree to Terms */}
          <Stack direction="row" alignItems="center" mt={2}>
            <Checkbox size="small" />
            <Typography variant="body2">
              I agree to the{" "}
              <Link href="#" underline="none" color="primary">
                Terms and Conditions
              </Link>
            </Typography>
          </Stack>

          {/* Register Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1, fontWeight: "bold", borderRadius: 2 , background: theme.buttonColor}}
          >
            Register
          </Button>
        </Box>

        {/* Right Illustration */}
        <Box
          flex={1}
          sx={{
            background: theme.cardBg,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/628560830/vector/expenses-checklist-receipts-wallet-calculator.jpg?s=612x612&w=0&k=20&c=qqRcNFA8M3gCv3B46RfvfvgcEczGtCMH_gJRzOZeBH0="
            alt="Register Illustration"
            style={{ width: "80%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
