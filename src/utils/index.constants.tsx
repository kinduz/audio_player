import {INavbarItems} from "./index.interfaces";
import FeedIcon from "@mui/icons-material/Feed";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BookIcon from "@mui/icons-material/Book";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";

export const spotiColor = "#1ED760";

export const NavbarItems: INavbarItems[] = [
  {
    icon: <FeedIcon />,
    title: "Feed",
    to: "/feed",
  },
  {
    icon: <WhatshotIcon />,
    title: "Trending",
    to: "/trending",
  },
  {
    icon: <PlayArrowIcon />,
    title: "Player",
    to: "/player",
  },
  {
    icon: <FavoriteIcon />,
    title: "Favorites",
    to: "/favorites",
  },
  {
    icon: <BookIcon />,
    title: "Library",
    to: "/library",
  },
  {
    icon: <SettingsIcon />,
    title: "Settings",
    to: "/settings",
  },
];
