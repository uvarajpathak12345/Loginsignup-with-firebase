import React, { useState } from "react";
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
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { UserContext } from "../Services/UserContext";
import { useContext } from "react";

const pages = [  {
  title:'home',
  link:'/'
},
{
  title:'about',
  link:'/about'
},
{
  title:'services',
  link:'/services'
}]
const settings = [{
  title:'Profile',
  link:'/profile'
},
{
  title:'Logout',
  link:'/logout'
},
];



function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [setting, setSetting] = useState("Profile");



  const { user, setUser } = useContext(UserContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handlelogout = () => {
    

  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (selectedSetting) => {
    if (selectedSetting === "Logout") {
      setUser({
        firstname: "",
        lastname: "",
        isLogin: false,
        pagechange: true,
      });
    }
  };

  return (
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Code4Care
              </Typography>

              {/* Navigation Menu for Small Screens */}
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
                  sx={{ display: { xs: "block", md: "none" } }}
                >

                  {/* when it is responsive */}
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={() => {console.log(page)}}>
                      <Typography textAlign="center">
                        <Link to= {page.link} >{page.title}</Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Navigation Menu for Large Screens */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >

                {/* when it is not responsive  */}
                {pages.map((page) => (

                  <Button
                    key={page}
                    onClick={() => {console.log(page)}}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                   <Link to={page.link}>{page.title}</Link>
                  </Button>
                ))}
              </Box>

              {/* User Settings Menu */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={() => setAnchorElUser(null)}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting.title)}>
                      <Typography textAlign="center">
                        <Link to = {setting.link}>{setting.title}</Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>


      
  );
}

export default ResponsiveAppBar;
