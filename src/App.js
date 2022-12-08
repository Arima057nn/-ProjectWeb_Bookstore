import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar/";
import Banner from "./components/banner/";

function App2() {
  useEffect(() => {
    document.title = "React Material UI - HOME";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Appbar />

        {/* <Button variant="contained">Test</Button> */}
      </Container>
      <Banner />
    </ThemeProvider>
  );
}

export default App2;
