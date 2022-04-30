import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

export const MuiBadge = () => {
  return (
    <Stack spacing={4} direction="row">
      <Badge badgeContent={5} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>
      <Badge badgeContent={1000} color="secondary" max={999}>
        <Mail />
      </Badge>
    </Stack>
  );
};
