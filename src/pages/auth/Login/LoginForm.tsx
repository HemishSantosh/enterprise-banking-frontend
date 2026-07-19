import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import { login } from "../../../services/auth.service";
import { loginSchema } from "../../../utils/validation";
import { saveToken } from "../../../utils/token";

import type { LoginRequest } from "../../../types/auth";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response = await login(data);

      saveToken(response.token);

      toast.success(response.message);

      navigate("/dashboard");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ?? "Login Failed"
        );
      } else {
        toast.error("Login Failed");
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={1}
      >
        Welcome Back
      </Typography>

      <Typography
        textAlign="center"
        color="text.secondary"
        mb={4}
      >
        Sign in to Enterprise Banking
      </Typography>

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        placeholder="Enter your email"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email")}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          },
        }}
      />

      <TextField
        fullWidth
        label="Password"
        type={showPassword ? "text" : "password"}
        margin="normal"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register("password")}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
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
          },
        }}
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Remember Me"
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isSubmitting}
        sx={{
          mt: 3,
          height: 50,
          borderRadius: 3,
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {isSubmitting ? "Signing In..." : "Login"}
      </Button>


<Typography
  mt={2}
  textAlign="center"
  color="primary"
  sx={{ cursor: "pointer" }}
>
  Forgot Password?
</Typography>

<Typography
  mt={3}
  textAlign="center"
  color="text.secondary"
>
  Don't have an account?{" "}
  <Typography
    component="span"
    color="primary"
    fontWeight={600}
    sx={{
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    }}
    onClick={() => navigate("/register")}
  >
    Register
  </Typography>
</Typography>
      <Typography
        mt={2}
        textAlign="center"
        color="primary"
        sx={{ cursor: "pointer" }}
      >
      
      </Typography>
    </Box>
  );
}