import React from "react";
import { Box, TextField, Button, Container } from "@mui/material";

import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/";
import Appbar from "../components/appbar";
import Banner from "../components/banner";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar />
      </Container>
    </ThemeProvider>
  );
}

export default Home;
