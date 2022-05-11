import React, { ReactNode } from "react";
import { SideNav } from "../SideNav/SideNav";
// import { Footer } from "../Footer";
// import { Logout } from "../UserAuthenticate";
import { Body } from "../Body";
import "./Wrapper.css";
// import "../styles/Welcome.css";

const Wrapper = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <>
      <div className="wrapperContainer">
        <div className="sideNav">
          <SideNav />
        </div>
        <div className="bodyContainer">
          <Body children={children} />
        </div>
        <audio id="globalAudio" />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Wrapper;
