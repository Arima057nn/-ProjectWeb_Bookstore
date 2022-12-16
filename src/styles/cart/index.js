import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/system";
import { Button, Container, IconButton } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";
import "@fontsource/merienda-one/";

export const BookWrapper = styled(Container)(({ theme }) => ({
  maxWidth: "1300px",
  display: "flex",
  justifyContent: "space-around",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const WrapperLeft = styled(Box)(({ theme }) => ({
  flex: 3,
  // [theme.breakpoints.down("md")]: {
  //   position: "relative",
  // },
}));

export const Book = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "16px 8px",
  marginBottom: "12px",
  backgroundColor: Colors.white,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const BookLeft = styled(Box)(({ theme }) => ({
  flex: 3,
  display: "flex",
}));

export const BookImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "120px",
  height: "120px",
  flex: 1,
}));

export const BookContent = styled(Stack)(({ theme }) => ({
  flex: 4,
  justifyContent: "space-around",
  // paddingRight: "20px",
}));
////////////////////////////////////
export const BookMiddle = styled(Stack)(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  // justifyContent: "center",
}));

export const BookPrice = styled(Box)(({ theme }) => ({
  color: Colors.danger,
  fontSize: "20px",
}));

export const BookActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 2,
}));

export const BookFavButton = styled(BookActionButton)(({ isfav, theme }) => ({
  color: isfav ? Colors.primary : Colors.light,
}));

export const BookActionPrice = styled(Box)(({ theme }) => ({}));

////////////////////////////////////
export const BookRight = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  // display: "flex",
}));

export const WrapperRight = styled(Stack)(({ theme }) => ({
  flex: 1,
  padding: 16,
  height: 400,
  marginLeft: 12,
  marginBottom: 12,
  backgroundColor: Colors.white,
  // [theme.breakpoints.down("md")]: {
  //   position: "relative",
  // },
}));

export const AddressInfo = styled(Box)(({ theme }) => ({
  // [theme.breakpoints.down("md")]: {
  //   position: "relative",
  // },
}));

export const PriceInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  // [theme.breakpoints.down("md")]: {
  //   position: "relative",
  // },
}));

export const BookAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  // fontSize: "12px",
  marginTop: 20,
  background: Colors.suki,
  opacity: 0.9,
}));
