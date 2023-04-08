import React, { useContext } from "react";
import { FavsContext } from "../../../Context/FavsContext/FavsContext";
import { Favs } from "./Favs";

export const FavsContainer = () => {
  const { favsState } = useContext(FavsContext);

  return (
    <div>
      <Favs favsState={favsState} />
    </div>
  );
};
