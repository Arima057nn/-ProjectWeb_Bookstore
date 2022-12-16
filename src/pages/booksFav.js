import React from "react";
import { Box, TextField, Button, Container, Typography } from "@mui/material";

import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/";
import Appbar from "../components/appbar";
import BooksFav from "../components/booksFav";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar />
      </Container>
      <Typography
        variant="h2"
        mt={4}
        sx={{
          textAlign: "center",
          lineHeight: 1.5,
          fontSize: "3.8rem",
          fontWeight: "bold",
          marginBottom: "20px",
          fontFamily: "Merienda One",
        }}
      >
        My Favorite Books
      </Typography>
      <BooksFav mt={2} />
    </ThemeProvider>
  );
}

export default Home;
