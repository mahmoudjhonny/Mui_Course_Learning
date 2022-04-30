import { Avatar, AvatarGroup, Stack } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={1} direction="row">
        <Avatar sx={{ bgcolor: "#ff0000" }}>EN</Avatar>
        <Avatar sx={{ bgcolor: "#00ff00" }}>AR</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>EN</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>AR</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};
