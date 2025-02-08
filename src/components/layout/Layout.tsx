import { Outlet } from "react-router-dom";
import Navbar, { drawerWidth } from "./Navbar";
// import Footer from "./Footer";
import { Box, IconButton, Toolbar } from "@mui/material";
import { MessageCircle } from "lucide-react";

const Layout = () => {
  return (
    <Box display="flex" flexDirection="row" flexGrow={1}>
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        pt={3}
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
        sx={{
          position: "fixed",
          zIndex: 2000,
          bottom: 20,
          right: 10,
          display: { xs: "none", md: "block" },
        }}
      >
        <MessageCircle size={35} />
      </IconButton>
    </Box>
  );
};

export default Layout;
