import { Grid, Paper, styled, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BooksContainer, BooksItem } from "../../styles/books";
import Item from "../../styles/books/item";

export default function BooksDesktop() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BooksContainer>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Item />
        </Grid>
        <Grid item xs={4}>
          <Item />
        </Grid>
        <Grid item xs={4}>
          <Item />
        </Grid>
        <Grid item xs={4}>
          <Item />
        </Grid>
        <Grid item xs={4}>
          <Item />
        </Grid>
        <Grid item xs={4}>
          <Item />
        </Grid>
        <Grid item xs={4}>
          <Item />
        </Grid>
      </Grid>
    </BooksContainer>
  );
}
