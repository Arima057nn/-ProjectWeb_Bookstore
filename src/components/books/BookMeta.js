import { Typography } from "@mui/material";
import { BookMetaWrapper } from "../../styles/books";
export default function BookMeta({ book, matches }) {
  return (
    <BookMetaWrapper>
      <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
        {book.name}
      </Typography>
      <Typography variant={matches ? "caption" : "body1"}>
        ${book.price}
      </Typography>
    </BookMetaWrapper>
  );
}
