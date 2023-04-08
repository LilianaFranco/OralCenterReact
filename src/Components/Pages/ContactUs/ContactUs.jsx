import { Alert, Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

export const ContactUs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    info: "",
  });

  console.log(user);
  const [formError, setFormError] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  //Input behaviour to catch information
  const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };
  console.log(user);
  //Functions to make input validations

  const validName = (str) => {
    const noEmptyCharacter = str.trim();
    console.log(noEmptyCharacter);
    if (noEmptyCharacter.length > 5 && str === noEmptyCharacter) {
      return true;
    } else {
      return false;
    }
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validateForm = () => {
    let errors = {};

    if (!validName(user.name)) {
      errors.name = "Tu nombre no es válido.";
    }

    if (isValidEmail(user.email) == false) {
      errors.email = "El email no es válido";
    }

    setFormError({ ...errors });

    return Object.keys(errors).length < 1; //In order to know if there are errors
  };

  //Submit behaviour
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setIsLogged(true);
    }
    //Send form
    console.log("Data:", user);
  };
  return (
    <div>
      <Box
        sx={{
          width: "100%",

          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>¿En qué podemos ayudarte?</h2>
        <Grid
          container
          spacing={2}
          flexDirection="column"
          alignContent="center"
        >
          <form maxwidth="100%" padding="10px 20px" onSubmit={handleSubmit}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                margin="normal"
                id="fullWidth"
                label="Nombre"
                placeholder="Ingresa tu nombre"
                onChange={(e) => handleChange(e, "name")}
              />
            </Grid>
            <span>{formError.name}</span>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                margin="normal"
                id="fullWidth"
                label="Email"
                placeholder="Ingresa tu email"
                onChange={(e) => handleChange(e, "email")}
              />
            </Grid>
            <span>{formError.email}</span>
            <Grid item xs={12} sm={6}>
              <TextField
                id="fullWidth"
                margin="normal"
                label="Información"
                multiline
                rows={4}
                placeholder="Cuéntanos qué necesitas..."
                onChange={(e) => handleChange(e, "info")}
              />
            </Grid>

            <Stack
              spacing={2}
              sx={{ m: 2 }}
              direction="row"
              justifyContent="center"
            >
              <Button variant="contained" type="text">
                Enviar
              </Button>
            </Stack>
          </form>
        </Grid>

        {isLogged && (
          <Alert severity="success" margin="auto">
            ¡Tu mensaje fue enviado con éxito!
          </Alert>
        )}
      </Box>
    </div>
  );
};
