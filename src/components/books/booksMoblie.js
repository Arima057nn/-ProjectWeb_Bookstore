import { Grid, Paper, styled, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BooksContainer, BooksItem } from "../../styles/books";
import Item from "../../styles/books/item";

export default function BooksMoblie() {
  //   const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //   }));

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BooksContainer>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item />
        </Grid>
        <Grid item xs={6}>
          <Item />
        </Grid>
        <Grid item xs={6}>
          <Item />
        </Grid>
        <Grid item xs={6}>
          <Item />
        </Grid>
        <Grid item xs={6}>
          <Item />
        </Grid>
        <Grid item xs={6}>
          <Item />
        </Grid>
      </Grid>
    </BooksContainer>
  );
}
