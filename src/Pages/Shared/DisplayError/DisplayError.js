import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const {  logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-center mt-24">
      <p className="text-red-600">Something Went Wrong !!!!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h3>
        Please{" "}
        <button onClick={handleLogOut} className="btn btn-outline btn-sm mt-2">
          Log Out
        </button>{" "}
        And Log Back In
      </h3>
    </div>
  );
};

export default DisplayError;
