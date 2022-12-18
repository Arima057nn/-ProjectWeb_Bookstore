import React from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";

import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/";
import Appbar from "../components/appbar";
import Banner from "../components/banner";
import Books from "../components/books";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar />
      </Container>
      <Banner />
    </ThemeProvider>
  );
}

export default Home;
