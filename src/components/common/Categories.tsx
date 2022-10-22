import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "styled-components";

const SWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  & .MuiSelect-icon,
  label {
    color: #e5e5e5;
  }
  & .MuiSelect-select {
    color: #e5e5e5;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: #e5e5e5;
  }
`;

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
    <SWrapper>
      <FormControl fullWidth>
        <InputLabel>Pick a movie category</InputLabel>
        <Select
          label="Pick a movie category"
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
    </SWrapper>
  );
}

export default Categories;
