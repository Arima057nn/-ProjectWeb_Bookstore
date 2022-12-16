import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Button, IconButton } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";
import "@fontsource/merienda-one/";

export const BookFav = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: " center",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    position: "relative",
  },
}));

export const BookFavImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "250px",
  height: "270px",
  background: Colors.light_gray,
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    // width: "80%",
    width: "200px ",
    padding: "24px",
  },
}));

export const BookFavActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 2,
}));

export const BookFavButton = styled(BookFavActionButton)(
  ({ isfav, theme }) => ({
    color: isfav ? Colors.primary : Colors.light,
    // [theme.breakpoints.up("md")]: {
    //   position: "absolute",
    //   right: 0,
    //   top: 0,
    // },
  })
);

export const BookFavAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  // [theme.breakpoints.up("md")]: {
  //   position: "absolute",
  //   bottom: "2%",
  //   width: "300px",
  //   padding: "10px 5px",
  //   // animation:
  //   //   show &&
  //   //   `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  // },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const BookFavMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const BookFavActionsWrapper = styled(Box)(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    // display: show ? "visible" : "none",
    // position: "absolute",
    // right: 0,
    // top: "20%",
    // animation:
    //   show &&
    //   `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
}));
