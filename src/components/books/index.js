import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { books } from "../../data";
import { Container } from "@mui/system";
import BooksDesktop from "./BooksDesktop";
import BooksMoblie from "./booksMoblie";

export default function Books() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderBooks = books.map((book) => (
    <Grid
      item
      key={book.id}
      xs={2} // 2 ô/ptu
      sm={4} // 4 ô/ptu
      md={4} // 4 ô/ptu
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      {matches ? (
        <BooksMoblie book={book} matches={matches} />
      ) : (
        <BooksDesktop book={book} matches={matches} />
      )}
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent={"center"}
        sx={{ margin: `20px 4px 10px 4px` }}
        columns={{ xs: 4, sm: 8, md: 12 }} //có 4 ô, 8 ô, 12 ô
      >
        {renderBooks}
      </Grid>
    </Container>
  );
}
