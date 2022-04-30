import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";

function MuiBottomNavigation() {
  const [value, setvalue] = useState(null);
  console.log(value);
  const handleChange = (e, newVal) => {
    setvalue(newVal);
  };
  return (
    <BottomNavigation
      sx={{ width: "90%", position: "absolute", bottom: 0 }}
      showLabels
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction lable="Home" icon={<Home />} />
      <BottomNavigationAction lable="Favorite" icon={<Favorite />} />
      <BottomNavigationAction lable="Profile" icon={<Person />} />
    </BottomNavigation>
  );
}

export default MuiBottomNavigation;
