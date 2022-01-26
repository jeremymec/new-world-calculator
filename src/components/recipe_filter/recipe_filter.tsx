import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typograpgy from "@mui/material/Typography";
import React from "react";
import { Filter } from "../app/app";

interface RecipeFilterProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

function RecipeFilter(props: RecipeFilterProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (event: React.MouseEvent, newFilter: Filter) => {
    props.setFilter(newFilter ?? "");
  };

  return (
    <ToggleButtonGroup
      className="recipeFilter"
      onChange={handleChange}
      value={props.filter}
      exclusive
    >
      <ToggleButton className="filterButton" value="Alchemy">
        <img
          className="filterIcon"
          src="./icons/arcana.svg"
          style={matches ? {} : { display: "block" }}
        />
        {matches && <Typograpgy className="filterText"> Arcana</Typograpgy>}
      </ToggleButton>
      <ToggleButton className="filterButton" value="Armoring">
        <img
          className="filterIcon"
          src="./icons/armoring.svg"
          style={matches ? {} : { display: "block" }}
        />
        {matches && <Typograpgy className="filterText"> Armoring</Typograpgy>}
      </ToggleButton>
      <ToggleButton className="filterButton" value="Cooking">
        <img
          className="filterIcon"
          src="./icons/cooking.svg"
          style={matches ? {} : { display: "block" }}
        />
        {matches && (
          <Typograpgy className="filterText Cooking"> Cooking</Typograpgy>
        )}
      </ToggleButton>
      <ToggleButton className="filterButton" value="Leatherworking">
        <img
          className="filterIcon"
          src="./icons/leatherworking.svg"
          style={matches ? {} : { display: "block" }}
        />
        {matches && (
          <Typograpgy className="filterText"> Leatherworking</Typograpgy>
        )}
      </ToggleButton>
      <ToggleButton className="filterButton Wrapped" value="Stonecutting">
        <img
          className="filterIcon"
          src="./icons/stonecutting.svg"
          style={matches ? {} : { display: "block" }}
        />
        {matches && (
          <Typograpgy className="filterText"> Stonecutting</Typograpgy>
        )}
      </ToggleButton>
      <ToggleButton className="filterButton" value="Weaponsmithing">
        <img
          className="filterIcon"
          src="./icons/weaponsmithing.svg"
          style={matches ? {} : { display: "block" }}
        />
        {matches && (
          <Typograpgy className="filterText"> Weaponsmithing</Typograpgy>
        )}
      </ToggleButton>
      <ToggleButton className="filterButton" value="Weaving">
        <img
          className="filterIcon"
          src="./icons/weaving.svg"
          style={matches ? {} : { display: "block" }}
        />
        {matches && <Typograpgy className="filterText"> Weaving</Typograpgy>}
      </ToggleButton>
      <ToggleButton className="filterButton" value="Woodworking">
        <img
          className="filterIcon"
          src="./icons/woodworking.svg"
          style={matches ? {} : { display: "block" }}
        />
        {matches && (
          <Typograpgy className="filterText"> Woodworking</Typograpgy>
        )}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default RecipeFilter;
