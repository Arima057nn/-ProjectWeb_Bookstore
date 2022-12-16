import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import { Container, Typography } from "@mui/material";
import "@fontsource/montez";
import { List } from "@mui/material";
import candles from "../../assets/background6.jpeg";
import "@fontsource/merienda-one/";

// Container
export const BookDetailContainer = styled(Container)(({ theme }) => ({
  justifyContent: "center",
  flexDirection: "column",
  // textAlign: "center",
  height: 1600,
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    // height: 500,
  },
  [theme.breakpoints.down("md")]: {
    // height: 400,
  },
  [theme.breakpoints.down("sm")]: {
    // height: 300,
  },
}));
