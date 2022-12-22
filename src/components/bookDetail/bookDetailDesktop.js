import { Link, Box } from "@mui/material";
import { BookDetailContainer, BookDetailImage } from "../../styles/bookDetail";

export default function BookDetailDesktop({ matches }) {
  return (
    <BookDetailContainer>
      <BookDetailImage />
    </BookDetailContainer>
  );
}
