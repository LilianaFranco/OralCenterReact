import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

import { Outlet } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <Outlet />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 400,
                letterSpacing: ".0rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Soy el footer
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
