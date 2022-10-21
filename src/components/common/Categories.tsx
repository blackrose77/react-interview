import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface CategoriesProps {
  currCategory: string | null;
  categories: Array<string>;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

function Categories(props: CategoriesProps) {
  const handleChange = (event: SelectChangeEvent) => {
    props.setCurrentCategory(
      event.target.value === "" ? null : event.target.value
    );
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Pick a movie category</InputLabel>
        <Select
          value={props.currCategory ? props.currCategory : ""}
          onChange={handleChange}
        >
          <MenuItem value={""} key={-1}>
            All
          </MenuItem>
          {props.categories.map((category) => (
            <MenuItem value={category} key={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Categories;
