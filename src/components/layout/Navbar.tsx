import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import {
  House,
  Briefcase,
  ClockAlert,
  NotebookText,
  FileClock,
  HandCoins,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

// export const drawerWidth = 200;
export const drawerWidth = 240;
const navItems = [
  { icon: <House />, text: "Dashboard" },
  { icon: <Briefcase />, text: "Find jobs" },
  { icon: <ClockAlert />, text: "My shift" },
  { icon: <NotebookText />, text: "My assignments" },
  { icon: <FileClock />, text: "Timesheet" },
  { icon: <HandCoins />, text: "Earnings" },
];
const settings = ["Account", "Settings", "Logout"];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <>
      <Box onClick={handleDrawerToggle}>
        <List>
          {navItems.map(({ icon, text }) => (
            <ListItem key={text} disablePadding>
              <NavLink
                to={`/${text.replace(" ", "").toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  color: "inherit",
                }}
              >
                {({ isActive }) => (
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        textDecoration: isActive ? "underline" : "none",
                        textDecorationColor: "#0098DB",
                        textDecorationThickness: 3,
                        textDecorationSkipInk: "none",
                      }}
                    />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        color="inherit"
        // color="default" // original
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        elevation={1}
      >
        <Toolbar
          sx={{ justifyContent: { xs: "space-between", sm: "flex-end" } }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="heate health"
                  src="https://avatar.iran.liara.run/public"
                />
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MuiLink
                  component={Link}
                  to={`/${setting.toLowerCase()}`}
                  underline="none"
                  color="inherit"
                >
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                </MuiLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <Logo />
          </div>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <Logo />
          </div>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;
