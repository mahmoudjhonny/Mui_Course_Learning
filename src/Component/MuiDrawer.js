import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";

export const MuiDrawer = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <Typography variant="h5" component="h6">
        Hello In Website
      </Typography>
      <IconButton
        onClick={() => setopen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setopen(false)}>
        <Box p={2} width="250px" role="presentation" textAlign="center">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
