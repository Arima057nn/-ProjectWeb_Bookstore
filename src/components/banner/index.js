import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerImage,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle variant="h2">Book Stor</BannerTitle>
        <BannerDescription variant="subtitle">
          Chào mừng anh chi em đến trang web buôn sách lậu của nhà chúng
          em...........
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
