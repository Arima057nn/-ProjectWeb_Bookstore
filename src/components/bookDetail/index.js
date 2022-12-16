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

  const renderBooks = books.map((book) => (
    <Grid
      item
      key={book.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {matches ? (
          <BookDetailMoblie book={book} matches={matches} />
        ) : (
          <img src={`${book.image}`} />
        )}
      </ImageList>
    </Grid>
  ));
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderBooks}
      </Grid>
    </Container>
  );
}
