import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BooksDesktop from "./booksDesktop";
import BooksMoblie from "./booksMoblie";

export default function Books() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <BooksMoblie matches={matches} />
      ) : (
        <BooksDesktop matches={matches} />
      )}
    </>
  );
}
