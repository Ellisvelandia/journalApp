import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
import { SideBar } from "../components/SideBar";

const drawerWidth = 240;

const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box sx={{ flexGrow: 1, p: 3 }} component="main">
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
