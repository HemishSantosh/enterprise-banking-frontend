import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { register } from "../../../services/auth.service";
export default function Register() {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const handleRegister = async () => {

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {

      setLoading(true);

      await register({
        firstName,
        lastName,
        email,
        phone,
        password,
      });

      setSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 1500);

 } catch (err: unknown) {

  if (axios.isAxiosError(err)) {
    setError(
      err.response?.data?.message || "Registration Failed"
    );
  } else {
    setError("Registration Failed");
  }

} finally {

  setLoading(false);

}

  };
    return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f4f6f8",
          p: 2,
        }}
      >
        <Paper
          elevation={5}
          sx={{
            width: 450,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            mb={3}
          >
            Create Account
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="First Name"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Phone Number"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <TextField
              label="Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Confirm Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

            <Button
              variant="contained"
              size="large"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Register"}
            </Button>

            <Typography textAlign="center">
              Already have an account?{" "}
              <Link to="/">Login</Link>
            </Typography>
          </Stack>
        </Paper>
      </Box>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Registration Successful
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={() => setError("")}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}