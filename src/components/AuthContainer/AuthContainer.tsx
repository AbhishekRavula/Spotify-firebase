import React from "react";
import "./styles.css";

export const AuthContainer = () => {
  const signin = () => {};

  return (
    <div className="container">
      <strong>To Continue, Please Sign In</strong>
      <div onClick={signin}>Sign in with Google</div>
    </div>
  );
};
