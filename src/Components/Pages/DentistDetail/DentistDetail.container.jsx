import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DentistContext } from "../../../Context/DentistContext.jsx/DentistContext";
import { DentistDetail } from "./DentistDetail";

export const DentistDetailContainer = () => {
  const { dispatch } = useContext(DentistContext);
  const { id } = useParams();

  useEffect(() => {
    const getUser = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    getUser.then((res) => dispatch({ type: "GET_USER", payload: res.data }));
  }, []);

  return (
    <div>
      <DentistDetail />
    </div>
  );
};
