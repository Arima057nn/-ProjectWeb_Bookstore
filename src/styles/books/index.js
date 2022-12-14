import { styled } from "@mui/material/styles";
import { Button, Grid, Box, IconButton, Container } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";
import "@fontsource/merienda-one/";

export const BookContainer = styled(Container)(({ theme }) => ({
  justifyContent: "center",
  alignItems: " center",

  [theme.breakpoints.down("md")]: {},
}));

export const CategoryWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: Colors.white,

  [theme.breakpoints.down("md")]: {},
}));

export const BookWrapper = styled(Box)(({ theme }) => ({
  flex: 3,
  display: "flex",
  [theme.breakpoints.down("md")]: {},
}));

export const Book = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: " center",
  width: "30%",
  borderRadius: 12,
  backgroundColor: Colors.white,

  [theme.breakpoints.down("md")]: {
    position: "relative",
  },
}));

// export const BookImage = styled("img")(({ src, theme }) => ({
//   src: `url(${src})`,
//   width: "250px",
//   height: "250px",
//   background: Colors.light_gray,
//   // padding: "10px",
//   [theme.breakpoints.down("md")]: {
//     // width: "80%",
//     width: "220px ",
//     height: "220px ",
//   },
// }));

// export const BookActionButton = styled(IconButton)(() => ({
//   background: Colors.white,
//   margin: 2,
// }));

// export const BookFavButton = styled(BookActionButton)(({ isfav, theme }) => ({
//   color: isfav ? Colors.primary : Colors.light,
// }));

// export const BookAddToCart = styled(Button, {
//   shouldForwardProp: (prop) => prop !== "show",
// })(({ show, theme }) => ({
//   width: "120px",
//   fontSize: "12px",
//   // [theme.breakpoints.up("md")]: {
//   //   position: "absolute",
//   //   bottom: "2%",
//   //   width: "300px",
//   //   padding: "10px 5px",
//   //   // animation:
//   //   //   show &&
//   //   //   `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
//   // },
//   background: Colors.suki2,
//   opacity: 0.9,
// }));

export const BookMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

// export const BookActionsWrapper = styled(Box)(({ show, theme }) => ({
//   [theme.breakpoints.up("md")]: {
//     // display: show ? "visible" : "none",
//     // position: "absolute",
//     // right: 0,
//     // top: "20%",
//     // animation:
//     //   show &&
//     //   `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
//   },
// }));
