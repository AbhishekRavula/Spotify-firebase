import React from "react";
// import "../styles/Welcome.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPlaylists from "./AllPlaylists";
// import SideNav from "./SideNav";
import Footer from "./Footer";
import Search from "./Search";
import LikedMusic from "./LikedMusic";
import UserPlaylists from "./UserPlaylists";
import PlaylistView from "./PlaylistView";
import UserAuthenticate, { Logout } from "./UserAuthenticate";
import { db } from "../firebase";
import { AuthGuard } from "./AuthGuard";
import Wrapper from "./Wrapper/Wrapper";
import { AuthContainer } from "../components";

function UpNav() {
  return (
    <div id="up_nav">
      <div>Welcome {localStorage.getItem("username")}</div>
      <div>
        <Logout />
      </div>
    </div>
  );
}

const WelcomeHome = () => {
  return (
    <Router>
      {/* <div id="content"> */}
      <Switch>
        <Route exact path="/signin" component={AuthContainer} />
        <AuthGuard exact path="/" component={AllPlaylists} />
        <AuthGuard exact path="/search" component={Search} />
        <AuthGuard exact path="/playlists/:id" component={PlaylistView} />
        <AuthGuard exact path="/collection/musics" component={LikedMusic} />
        <AuthGuard exact path="/collection/playlists" component={UserPlaylists} />
      </Switch>
      {/* </div> */}
    </Router>
  );
};

export default WelcomeHome;
