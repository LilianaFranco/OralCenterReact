import axios from "axios";
import { useContext, useEffect } from "react";
import { DentistContext } from "../../../Context/DentistContext.jsx/DentistContext";
import { FavsContext } from "../../../Context/FavsContext/FavsContext";
import { DentistsList } from "./DentistsList";

export const DentistsListContainer = () => {
  const { state, dispatch } = useContext(DentistContext);
  const { favsState, favsDispatch } = useContext(FavsContext);

  useEffect(() => {
    const getDentists = axios.get("https://jsonplaceholder.typicode.com/users");
    getDentists
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  console.log(state.users);
  console.log(favsState);

  return (
    <div>
      <DentistsList
        users={state.users}
        favsDispatch={favsDispatch}
        favs={favsState.favs}
      />
    </div>
  );
};
