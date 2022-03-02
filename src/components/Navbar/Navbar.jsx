import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { ADMIN } from "../../helpers/consts";

import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { GiBookAura } from "@react-icons/all-files/gi/GiBookAura";

import "./Navbar.module.css";
import AdminPage from "../../pages/AdminPage";
import { useAuth } from "../../contexts/AuthContext";

const pages = [
  { name: "HOME", link: "/", id: 1 },
  { name: "PRODUCTS", link: "/products", id: 5 },
  { name: "ABOUT US", link: "/aboutus", id: 2 },
  { name: "CONTACTS", link: "/contacts", id: 4 },
];

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#000" }}>

      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <h2>
              {" "}
              <GiBookAura sx={{ color: "#000" }} />{" "}
            </h2>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"

            >
              <h2 sx={{}}>
                {" "}
                <GiBookAura sx={{ margin: "100px" }} />
                Readit
              </h2>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <h2>Readit</h2>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <center>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link to={page.link}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </Link>
                    </MenuItem>
                  </center>
                ))}
                {email == ADMIN ? (
                  <MenuItem>
                    <Link to="/admin">
                      <Typography textAlign="center">ADMIN PANNEL</Typography>
                    </Link>
                  </MenuItem>
                ) : null}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <h2>
                <GiBookAura />
              </h2>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                mx: "auto",
                width: 200,
                p: 1,
                m: 1,
              }}
            >
              {pages.map((page) => (
                <center>
                  <Link to={page.link}>
                    <Button
                      key={page.id}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                </center>
              ))}
              {email == ADMIN ? (
                <Link to="/admin">
                  <Button
                    sx={{
                      my: 2,
                      color: "#ff9100",
                      display: "block",
                      fontSize: 15,
                      fontFamily: "Monospace",
                    }}
                  >
                    ADMIN PANEL
                  </Button>
                </Link>
              ) : null}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {email ? (
                <Button
                  id="button"
                  variant="outlined"
                  color="error"
                  sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : null}

              {email ? null : (
                <Link to="/auth">
                  <Button
                    id="button"
                    variant="outlined"
                    color="error"
                    sx={{ my: 2, display: "block", fontFamily: "Monospace" }}
                    onClick={handleLogout}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </Container>
      </Container>
    </AppBar>
  );
};
export default Navbar;
