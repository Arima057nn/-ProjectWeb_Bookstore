import { Search } from "@mui/icons-material";
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ActionIconContainerDesktop,
  ActionIconContainerMoblie,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Action from "../../styles/appbar/action";

import Box from "@mui/material/Box";

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>
        <Link underline="none" href="/">
          Book Store
        </Link>
      </AppbarHeader>
      <MyList type="row">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexGrow: "5",
            textAlign: "center",
          }}
        >
          <ListItemText sx={{}}>
            <Link
              underline="hover"
              href="/home"
              sx={{
                fontSize: "1.2rem",
                "&:hover": {
                  color: "#be9c79",
                },
              }}
            >
              Home
            </Link>
          </ListItemText>
          <ListItemText sx={{}}>
            <Link
              underline="hover"
              href="#"
              sx={{
                fontSize: "1.2rem",
                "&:hover": {
                  color: "#be9c79",
                },
              }}
            >
              About
            </Link>
          </ListItemText>
          <ListItemText sx={{}}>
            <Link
              underline="hover"
              href="/books"
              sx={{
                fontSize: "1.2rem",
                "&:hover": {
                  color: "#be9c79",
                },
              }}
            >
              Book
            </Link>
          </ListItemText>

          <ListItemText sx={{}}>
            <Link
              underline="hover"
              href="#"
              sx={{
                fontSize: "1.2rem",
                "&:hover": {
                  color: "#be9c79",
                },
              }}
            >
              Contact
            </Link>
          </ListItemText>
        </Box>
        <ListItemButton sx={{ flexGrow: "1" }}>
          <ListItemIcon>
            <SearchIcon />
            Search ...
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Action matches={matches} />
    </AppbarContainer>
  );
}
