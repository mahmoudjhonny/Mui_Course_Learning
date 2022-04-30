import { Avatar, Chip, Stack } from "@mui/material";
import { useState } from "react";

export const MuiChips = () => {
  const [chip, setChips] = useState([
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
  ]);
  console.log(chip);
  const handleDelete = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack spacing={2} direction="row">
      {/* <Chip label="Chip" color="secondary" size="small" />
      <Chip
        label="Chip Outlined"
        variant="outlined"
        color="secondary"
        avatar={<Avatar>M</Avatar>}
      />
      <Chip
        label="Click"
        color="success"
        onClick={() => console.log("Clicked")}
      /> */}
      {chip.map((chip) => (
        <Chip key={chip} label={chip} onDelete={handleDelete(chip)} />
      ))}
    </Stack>
  );
};
