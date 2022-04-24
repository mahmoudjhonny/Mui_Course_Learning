import { Star, StarSharp } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import { useState } from "react";

function MuiRating() {
  const [value, setvalue] = useState(null);
  console.log(value);
  const handleChange = (e, newVal) => {
    setvalue(newVal);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<Star fontSize="inherit" color="error" />}
        emptyIcon={<StarSharp fontSize="inherit" />}
        // readOnly
      />
    </Stack>
  );
}

export default MuiRating;
