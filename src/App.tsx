import React from "react";
import WelcomeHome from "./components/Welcome";
import UserAuthenticate from "./components/UserAuthenticate";
import { useSelector } from "react-redux";
import { getUserPlaylists } from "./redux/selectors/playlistSelector";

function App() {
  let token = localStorage.getItem("token");
  // const userPlaylists = useSelector(getUserPlaylists);
  // console.log("userPlaylists", userPlaylists);

  // return token ? <WelcomeHome /> : <UserAuthenticate />;
  return <WelcomeHome />;
  // return <UserAuthenticate />;
}
export default App;
