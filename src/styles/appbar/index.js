import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Colors from "../theme";
import { Typography } from "@mui/material";
import "@fontsource/montez";
import { List } from "@mui/material";

// Container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  //   marginTop: 4,
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 8px",
  borderBottom: "1px solid #be9c79",
}));

// Header
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "2.8em",
  fontWeight: "bold",
  //   marginRight: "4rem",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  flexGrow: 0,
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
