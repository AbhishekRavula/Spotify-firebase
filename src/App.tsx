import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPlaylists from "./components/AllPlaylists/AllPlaylists";
import { Search } from "./components/Search/index";
import { LikedMusic } from "./components/LikedMusic";
import UserPlaylists from "./components/UserPlaylists";
import PlaylistView from "./components/PlaylistView/PlaylistView";
import { db } from "./firebase";
import { AuthGuard } from "./components/AuthGuard";
import { AuthContainer } from "./components/AuthContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={AuthContainer} />
        <AuthGuard exact path="/" component={AllPlaylists} />
        <AuthGuard exact path="/search" component={Search} />
        <AuthGuard exact path="/playlists/:id" component={PlaylistView} />
        <AuthGuard exact path="/collection/musics" component={LikedMusic} />
        <AuthGuard exact path="/collection/playlists" component={UserPlaylists} />
      </Switch>
    </Router>
  );
};

export default App;
