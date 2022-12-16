import { Favorite } from "@mui/icons-material";
import {
  Book,
  BookActionsWrapper,
  BookImage,
  BookAddToCart,
  BookFavButton,
  BookActionButton,
} from "../../styles/books";
import BookMeta from "./BookMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import BuyIcon from "@mui/icons-material/ShoppingCartSharp";
import { Stack } from "@mui/material";

export default function BooksDeskop({ book, matches }) {
  return (
    <>
      <Book>
        <BookImage src={book.image} />

        <BookMeta book={book} matches={matches} />

        <BookActionsWrapper>
          <Stack direction={"row"}>
            <BookFavButton isfav={0}>
              <FavoriteIcon />
            </BookFavButton>
            <BookActionButton theme>
              <ShareIcon color="primary" />
            </BookActionButton>
          </Stack>
        </BookActionsWrapper>
        <BookAddToCart variant="contained">Add to cart</BookAddToCart>
      </Book>
    </>
  );
}
