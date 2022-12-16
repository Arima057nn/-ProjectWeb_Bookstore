import {
  BookFav,
  BookFavActionsWrapper,
  BookFavImage,
  BookFavAddToCart,
  BookFavButton,
  BookFavActionButton,
} from "../../styles/booksFav";
import BookMeta from "../books/BookMeta";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Favorite } from "@mui/icons-material";
// import BuyIcon from "@mui/icons-material/ShoppingCartSharp";
import { Stack } from "@mui/material";

export default function BooksFavMoblie({ book, matches }) {
  return (
    <>
      <BookFav>
        <BookFavImage src={book.image} />

        <BookMeta book={book} matches={matches} />
        <BookFavActionsWrapper>
          <Stack direction={matches ? "row" : "column"}>
            <BookFavButton isfav={1}>
              <FavoriteIcon />
            </BookFavButton>
            <BookFavActionButton>
              <ShareIcon color="primary" />
            </BookFavActionButton>
          </Stack>
        </BookFavActionsWrapper>
        <BookFavAddToCart variant="contained">Add to cart</BookFavAddToCart>
      </BookFav>
    </>
  );
}
