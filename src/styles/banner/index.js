import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import { Container, Typography } from "@mui/material";
import "@fontsource/montez";
import { List } from "@mui/material";
import candles from "../../assets/background6.jpeg";
import "@fontsource/merienda-one/";

// Container
export const BannerContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(70deg, #fff, transparent 70%), url(${candles}),no-repeat`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: 700,
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    height: 500,
  },
  [theme.breakpoints.down("md")]: {
    height: 400,
  },
  [theme.breakpoints.down("sm")]: {
    height: 300,
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "480px",
  textAlign: "center",
  marginLeft: "140px",

  [theme.breakpoints.down("lg")]: {
    alignItems: "center",
    marginLeft: "0",
  },

  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    marginLeft: "0",
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    marginLeft: "0",
    fontSize: "12px",
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  marginBottom: "20px",
  fontSize: "4.5rem",
  fontWeight: "bold",
  fontFamily: "Merienda One",

  [theme.breakpoints.down("lg")]: {
    fontSize: "3.8rem",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "12px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "3.2rem",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));
