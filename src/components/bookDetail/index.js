import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BookDetailDesktop from "./bookDetailDesktop";
import BookDetailMoblie from "./bookDetailMoblie";
import { books } from "../../data";
import { Box, Button, Container, Grid } from "@mui/material";
import { ImageList } from "@mui/material";
export default function BookDetail() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <BookDetailMoblie matches={matches} />
      ) : (
        <BookDetailDesktop matches={matches} />
      )}
    </>
  );
}
