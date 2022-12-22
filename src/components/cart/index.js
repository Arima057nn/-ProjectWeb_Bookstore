import React, { useEffect, useState } from "react";
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
  const [disabled, setDisabled] = useState(true);
  const [show, setShow] = useState("true");
  const [count, setCount] = useState(1);
  const [isfav, setIsfav] = useState(1);

  const FavHandle = () => {
    if (isfav === 1) setIsfav(0);
    else setIsfav(1);
  };
  useEffect(() => {
    if (count > 1) setDisabled(false);
    else setDisabled(true);
  }, [count]);

  return (
    <BookWrapper>
      <WrapperLeft>
        {show && (
          <Book>
            <BookLeft>
              <BookImage src="https://eccthai.com/wp-content/uploads/2021/01/sach-dac-nhan-tam-dale-carnegie.jpg" />
              <BookContent>
                <Link underline="none" href="/books">
                  <Typography variant="h6">
                    Fahasa - Đắc Nhân Tâm - Bìa Cứng
                  </Typography>
                </Link>
                <p color="red">Chỉ còn 10 sản phẩm</p>
              </BookContent>
            </BookLeft>
            {/* <BookMiddle display={"none"}> */}
            <BookMiddle>
              <BookPrice>20000 VNĐ</BookPrice>
              <BookActionPrice>
                <BookFavButton onClick={FavHandle} isfav={isfav}>
                  <FavoriteIcon />
                </BookFavButton>
                <BookFavButton onClick={() => setShow(!show)}>
                  <DeleteIcon />
                </BookFavButton>
              </BookActionPrice>
            </BookMiddle>
            <BookRight>
              <Button
                variant="outlined"
                color="error"
                disabled={disabled}
                size="small"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </Button>
              {count}
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => setCount(count + 1)}
              >
                +
              </Button>
            </BookRight>
          </Book>
        )}

        <Book>
          <BookLeft>
            <BookImage src="https://cf.shopee.vn/file/3ccb58b07766e8a2498b58db833bbe9b" />
            <BookContent>
              <Link underline="none" href="/books">
                <Typography variant="h6">
                  Fahasa - Đắc Nhân Tâm - Bìa Cứng
                </Typography>
              </Link>

              <p color="red">Chỉ còn 10 sản phẩm</p>
            </BookContent>
          </BookLeft>
          <BookMiddle>
            <BookPrice>20000 VNĐ</BookPrice>
            <BookActionPrice>
              <BookFavButton isfav={1}>
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
                <Typography variant="h6">
                  Fahasa - Đắc Nhân Tâm - Bìa Cứng
                </Typography>
              </Link>

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
