import { Box } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { DentistCard } from "../../Common/DentistCard";

export const Favs = ({ favsState }) => {
  return (
    <div>
      {favsState.favs.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
      ))}
    </div>
  );
};
