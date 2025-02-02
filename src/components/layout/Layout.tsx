import { Outlet } from "react-router-dom";
import Navbar, { drawerWidth } from "./Navbar";
// import Footer from "./Footer";
import { Box, IconButton, Toolbar } from "@mui/material";
import { MessageCircle } from "lucide-react";

// @todo change navbar to be on the side
const Layout = () => {
  return (
    <Box display="flex" flexGrow={1} position="relative">
      <Navbar />
      <Box
        flexGrow={1}
        p={3}
        width={{ sm: `calc(100% - ${drawerWidth}px)` }}
        component="main"
      >
        <Toolbar />
        <Outlet />
      </Box>
      {/* <Footer /> */}
      <IconButton
        size="large"
        onClick={() => {}}
        sx={{ position: "absolute", bottom: 20, right: 10 }}
      >
        <MessageCircle size={35} />
      </IconButton>
    </Box>
  );
};

export default Layout;
