import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <Box>
      <Navbar />
      <Box p={{ xs: 1}}>
        <Outlet />
      </Box>
    </Box>
  );
}
