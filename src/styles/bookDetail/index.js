import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import { Container, Typography } from "@mui/material";
import "@fontsource/montez";
import { List } from "@mui/material";
import candles from "../../assets/images/B3.jpg";
import "@fontsource/merienda-one/";

// Container
export const BookDetailContainer = styled(Container)(({ theme }) => ({
  justifyContent: "center",

  // textAlign: "center",
  height: 1000,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    // height: 400,
  },
}));

export const BookDetailImage = styled(Box)(({ theme }) => ({
  background: `linear-gradient(70deg, #fff, transparent 70%), url(${candles}),no-repeat`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  flex: 1,
  height: 400,
  width: "50%",
  [theme.breakpoints.down("md")]: {
    // height: 500,
  },
}));

export const BookDetailContent = styled(Box)(({ theme }) => ({
  width: "50%",
  flex: 1,

  [theme.breakpoints.down("md")]: {
    // height: 500,
  },
}));
