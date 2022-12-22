// import {
//   Book,
//   BookActionsWrapper,
//   BookImage,
//   BookAddToCart,
//   BookFavButton,
//   BookActionButton,
// } from "../../styles/books";
// import BookMeta from "./BookMeta";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import { Stack } from "@mui/material";

// export default function BooksMoblie({ book, matches }) {
//   return (
//     <>
//       <Book>
//         <BookImage src={book.image} />

//         <BookMeta book={book} matches={matches} />
//         <BookActionsWrapper>
//           <Stack direction={matches ? "row" : "column"}>
//             <BookFavButton isfav={0}>
//               <FavoriteIcon />
//             </BookFavButton>
//             <BookActionButton>
//               <ShareIcon color="primary" />
//             </BookActionButton>
//           </Stack>
//         </BookActionsWrapper>
//         <BookAddToCart variant="contained">Add to cart</BookAddToCart>
//       </Book>
//     </>
//   );
// }
