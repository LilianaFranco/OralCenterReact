import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Login = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  //Hide or show password
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          padding: "10px 20px",
        }}
      >
        <Grid
          container
          spacing={2}
          flexDirection="column"
          alignContent="center"
        >
          <h1>Bienvenido a mi tienda</h1>
          <Grid item xs={12} sm={6}>
            <TextField label="Ingresa tu email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Stack
          spacing={2}
          sx={{ m: 2 }}
          direction="row"
          justifyContent="center"
        >
          <Button variant="contained">Login</Button>
          <Button variant="outlined">Registrarme</Button>
        </Stack>
      </Box>
    </div>
  );
};
