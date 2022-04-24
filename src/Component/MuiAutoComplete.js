import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

const skill = {
  id: null,
  lable: [],
};
const skillsMenu = ["Html", "Css", "JavaScript", "React.js", "Redux.js"];
const skillMab = skillsMenu.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
function MuiAutoComplete() {
  const [value, setvalue] = useState(null);
  const [skills, setskills] = useState(skill);
  console.log(skills);
  return (
    <Stack spacing={2} width={250}>
      <Autocomplete
        options={skillsMenu}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, newval) => setvalue(newval)}
      />
      <Autocomplete
        options={skillMab}
        renderInput={(params) => <TextField {...params} lable="Skills" />}
        value={skills}
        onChange={(e, newval) => setskills(newval)}
      />
    </Stack>
  );
}

export default MuiAutoComplete;
