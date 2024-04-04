import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ChatIcon from "@mui/icons-material/Chat";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import People from "@mui/icons-material/People";
import School from "@mui/icons-material/School";
import Settings from "@mui/icons-material/Settings";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "../search/SearchBar";
import "./_header.css";

export default function Header() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        {/* left side */}
        <Typography variant="h6">
          Eduardo Martell &nbsp;
          <Typography variant="overline">Developer</Typography>
        </Typography>
        {/* Menus */}
        <Box className="menus">
          <Button color="inherit" href="#about" startIcon={<AccountBoxIcon />}>
            &nbsp; About me
          </Button>
          <Button color="inherit" href="#skills" startIcon={<School />}>
            &nbsp; Skills
          </Button>
          <Button color="inherit" href="#projects" startIcon={<People />}>
            &nbsp; Projects
          </Button>
          <Button
            color="inherit"
            href="#projects"
            startIcon={<GraphicEqIcon />}
          >
            &nbsp; Experiences
          </Button>
          <Button color="inherit" href="#contact" startIcon={<ChatIcon />}>
            &nbsp; Contact
          </Button>
        </Box>
        {/* Search bar */}
        <Box className="search">
          <SearchBar placeholder={"Search on all the page"} widthExpand={25} />
        </Box>

        <IconButton
          size="large"
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
