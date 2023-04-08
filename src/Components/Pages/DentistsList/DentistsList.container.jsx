import axios from "axios";
import { useContext, useEffect } from "react";
import { DentistContext } from "../../../Context/DentistContext.jsx/DentistContext";
import { DentistsList } from "./DentistsList";

export const DentistsListContainer = () => {
  const { state, dispatch } = useContext(DentistContext);

  useEffect(() => {
    const getDentists = axios.get("https://jsonplaceholder.typicode.com/users");
    getDentists
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  console.log(state.users);

  return (
    <div>
      <DentistsList users={state.users} />
    </div>
  );
};
