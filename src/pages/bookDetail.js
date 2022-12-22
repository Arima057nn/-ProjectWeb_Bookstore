import React from "react";
import { Box, TextField, Button, Container } from "@mui/material";

import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/";
import Appbar from "../components/appbar";
import BookDetail from "../components/bookDetail";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar />
      </Container>
      <Box sx={{ backgroundColor: "#F6F9FC" }}>
        <BookDetail mt={2} />
      </Box>
    </ThemeProvider>
  );
}

export default Home;
