import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import "../styles/Welcome.css";
import Button from "@material-ui/core/Button";
import { HOSTNAME } from "../spotify.constants.js";
import { useDispatch } from "react-redux";
import { AuthActions, AuthAuctionTypes } from "../redux/actions";

function UserAuthenticate() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState(null);

  const dispatch = useDispatch();

  const login = () => {
    dispatch(AuthActions.login());
  };

  return (
    // <div id="userAuthenticate">
    //   <div>
    //     <strong>To Continue, Please Sign In</strong>
    //     <div style={{ backgroundColor: "grey", color: "white", padding: ".5rem", textAlign: "center" }} onClick={login}>
    //       Sign in with Google
    //     </div>
    //   </div>
    // </div>

    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      someeee
    </div>
  );
}

export function Logout() {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  return (
    <Button variant="contained" size="small" onClick={logout}>
      logout
    </Button>
  );
}

export default UserAuthenticate;
