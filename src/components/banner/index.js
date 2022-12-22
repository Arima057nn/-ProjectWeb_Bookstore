import { Typography, useMediaQuery, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerImage,
  BannerButton,
} from "../../styles/banner";
import { Colors } from "../../styles/theme";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle variant="h2">Book Store</BannerTitle>
        <BannerDescription variant="subtitle">
          Chào mừng anh chi em đến trang web buôn sách lậu của nhà chúng
          em...........
        </BannerDescription>
        <Box>
          <Button variant="contained" color="primary" size="large">
            Shop Now
          </Button>
        </Box>
      </BannerContent>
    </BannerContainer>
  );
}
