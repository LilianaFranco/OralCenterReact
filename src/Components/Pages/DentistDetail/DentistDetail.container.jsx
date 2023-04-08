import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DentistContext } from "../../../Context/DentistContext.jsx/DentistContext";
import { DentistDetail } from "./DentistDetail";

export const DentistDetailContainer = () => {
  const { state, dispatch } = useContext(DentistContext);
  const { id } = useParams();

  useEffect(() => {
    const getDentist = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    getDentist
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  console.log(state.users);

  return (
    <div>
      <DentistDetail user={state.users} />
    </div>
  );
};
