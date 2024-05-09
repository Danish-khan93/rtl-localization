import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { LanguageChanger } from "./index";

import Link from "next/link";
const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between items-center bg-black">
        <Box>
          <Typography>logo</Typography>
        </Box>
        <Box className="flex justify-between gap-6">
          <LanguageChanger />
          <Link href="/">
            <Typography>Home</Typography>
          </Link>
          <Link href="/about">
            <Typography>About</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
