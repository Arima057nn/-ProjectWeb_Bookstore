import { IconButton, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  ActionIconContainerDesktop,
  ActionIconContainerMoblie,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";

import Action from "../../styles/appbar/action";
export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>

      <AppbarHeader textAlign={"center"} variant="h4">
        <Link underline="none" href="#">
          Book Store
        </Link>
      </AppbarHeader>

      <IconButton>
        <SearchIcon />
      </IconButton>
      {/* <Action matches={matches} /> */}
    </AppbarContainer>
  );
}
