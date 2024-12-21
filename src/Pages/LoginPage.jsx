import React from "react";
import { Box, Typography, TextField, Checkbox, Button, Link, Stack, IconButton } from "@mui/material";
import { Google, Apple, Facebook, Email, Visibility } from "@mui/icons-material";
import { useTheme } from "../Hooks/ThemeProvider";


const LoginPage = () => {

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
            Sign in
          </Typography>
          <Typography variant="body2" mb={3}>
            Don&apos;t have an account?{" "}
            <Link href="#" underline="none" color="primary" fontWeight="bold">
              Register here
            </Link>
          </Typography>

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

          {/* Remember Me and Forgot Password */}
          <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
            <Box display="flex" alignItems="center">
              <Checkbox size="small" />
              <Typography variant="body2">Remember me</Typography>
            </Box>
            <Link href="#" underline="none" color="primary" fontSize="small">
              Forgot Password?
            </Link>
          </Stack>

          {/* Sign-in Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1, fontWeight: "bold", borderRadius: 2 , background: theme.scardbg}}
          >
            Sign in
          </Button>

          {/* Social Login Icons */}
          <Stack direction="row" justifyContent="center" mt={3} spacing={2}>
            <IconButton color="error">
              <Google />
            </IconButton>
            <IconButton color="default">
              <Apple />
            </IconButton>
            <IconButton color="primary">
              <Facebook />
            </IconButton>
          </Stack>
        </Box>

        {/* Right Illustration */}
        <Box
          flex={1}
          sx={{
            backgroundColor: theme.cardBg,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/628560830/vector/expenses-checklist-receipts-wallet-calculator.jpg?s=612x612&w=0&k=20&c=qqRcNFA8M3gCv3B46RfvfvgcEczGtCMH_gJRzOZeBH0="
            alt="Illustration"
            style={{ width: "80%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
