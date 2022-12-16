import React from "react";
import { Typography, Fab, Box, Divider, Button } from "@mui/material";
import {
  BookWrapper,
  WrapperLeft,
  WrapperRight,
  Book,
  BookMiddle,
  BookLeft,
  BookRight,
  BookImage,
  BookContent,
  BookPrice,
  BookActionPrice,
  BookFavButton,
  AddressInfo,
  PriceInfo,
  BookAddToCart,
} from "../../styles/cart";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import PositionIcon from "@mui/icons-material/LocationOn";

import { Link } from "@mui/material";
import { Stack } from "@mui/system";

export default function Cart() {
  return (
    <BookWrapper>
      <WrapperLeft>
        <Book>
          <BookLeft>
            <BookImage src="https://eccthai.com/wp-content/uploads/2021/01/sach-dac-nhan-tam-dale-carnegie.jpg" />
            <BookContent>
              <Link underline="none" href="/books">
                Fahasa - Đắc Nhân Tâm - Bìa Cứng (Tái Bản 2021)
              </Link>
              <Typography variant="h6">Arima</Typography>
              <p color="red">Chỉ còn 10 sản phẩm</p>
            </BookContent>
          </BookLeft>
          <BookMiddle>
            <BookPrice>20000 VNĐ</BookPrice>
            <BookActionPrice>
              <BookFavButton isfav={0}>
                <FavoriteIcon />
              </BookFavButton>
              <BookFavButton>
                <DeleteIcon />
              </BookFavButton>
            </BookActionPrice>
          </BookMiddle>
          <BookRight>
            <BookFavButton>
              <Remove />
            </BookFavButton>
            <Fab size="small">1</Fab>
            <BookFavButton>
              <Add />
            </BookFavButton>
          </BookRight>
        </Book>

        <Book>
          <BookLeft>
            <BookImage src="https://cf.shopee.vn/file/3ccb58b07766e8a2498b58db833bbe9b" />
            <BookContent>
              <Link underline="none" href="/books">
                Fahasa - Đắc Nhân Tâm - Bìa Cứng (Tái Bản 2021)
              </Link>
              <Typography variant="h6">Arima</Typography>
              <p color="red">Chỉ còn 10 sản phẩm</p>
            </BookContent>
          </BookLeft>
          <BookMiddle>
            <BookPrice>20000 VNĐ</BookPrice>
            <BookActionPrice>
              <BookFavButton isfav={0}>
                <FavoriteIcon />
              </BookFavButton>
              <BookFavButton>
                <DeleteIcon />
              </BookFavButton>
            </BookActionPrice>
          </BookMiddle>
          <BookRight>
            <BookFavButton>
              <Remove />
            </BookFavButton>
            <Fab size="small">1</Fab>
            <BookFavButton>
              <Add />
            </BookFavButton>
          </BookRight>
        </Book>

        <Book>
          <BookLeft>
            <BookImage src="https://cf.shopee.vn/file/sg-11134201-22100-gl6k8whuk7iva4" />
            <BookContent>
              <Link underline="none" href="/books">
                Fahasa - Đắc Nhân Tâm - Bìa Cứng (Tái Bản 2021)
              </Link>
              <Typography variant="h6">Arima</Typography>
              <p color="red">Chỉ còn 10 sản phẩm</p>
            </BookContent>
          </BookLeft>
          <BookMiddle>
            <BookPrice>20000 VNĐ</BookPrice>
            <BookActionPrice>
              <BookFavButton isfav={0}>
                <FavoriteIcon />
              </BookFavButton>
              <BookFavButton>
                <DeleteIcon />
              </BookFavButton>
            </BookActionPrice>
          </BookMiddle>
          <BookRight>
            <BookFavButton>
              <Remove />
            </BookFavButton>
            <Fab size="small">1</Fab>
            <BookFavButton>
              <Add />
            </BookFavButton>
          </BookRight>
        </Book>
      </WrapperLeft>
      <WrapperRight>
        <AddressInfo>
          <Typography variant="h6">Địa điểm</Typography>
          <Box
            sx={{
              borderBottom: "1px solid #eff0f5",
              paddingBottom: 1,
            }}
          >
            <PositionIcon /> Phường Phương Liệt, Quận Thanh Xuân, Thành phố Hà
            Nội
          </Box>

          <Box mt={2}>
            <Typography variant="h6">Thông tin đơn hàng</Typography>
            <Stack>
              <PriceInfo>
                <p>Tạm tính (3 sản phẩm)</p>
                <p>1.000.000 Đ</p>
              </PriceInfo>

              <PriceInfo>
                <p>Phí vận chuyển</p>
                <p>1.000.000 Đ</p>
              </PriceInfo>

              <Divider />
              <PriceInfo>
                <p>Tổng cộng</p>
                <p>10.000 Đ</p>
              </PriceInfo>

              <BookAddToCart variant="contained">
                Xác nhận mua hàng
              </BookAddToCart>
            </Stack>
          </Box>
        </AddressInfo>
      </WrapperRight>
    </BookWrapper>
  );
}
