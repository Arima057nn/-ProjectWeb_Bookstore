import React from "react";
import { Box, TextField, Button, Container } from "@mui/material";

import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/";
import Login from "../components/login";
function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default Home;
