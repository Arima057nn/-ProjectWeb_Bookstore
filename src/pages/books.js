import React from "react";
import { Box, TextField, Button, Container } from "@mui/material";

import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/";
import Appbar from "../components/appbar";
import Books from "../components/books";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar />
      </Container>
      <Books mt={2} />
    </ThemeProvider>
  );
}

export default Home;
