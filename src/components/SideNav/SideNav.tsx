import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
// import "../styles/Welcome.css";
// import "../styles/Welcome.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import LibraryMusicRoundedIcon from "@material-ui/icons/LibraryMusicRounded";
import PlaylistAddRoundedIcon from "@material-ui/icons/PlaylistAddRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
// import { HOSTNAME } from "../spotify.constants.js";
import "./SideNav.css";

let useClickOutside = handler => {
  // custom hook defination
  let domNode = useRef();
  useEffect(() => {
    let eventHandler = event => {
      //   if (domNode.current && !domNode.current.contains(event.target)) {
      //     handler();
      //   }
    };
    document.addEventListener("mousedown", eventHandler);
  });
  return domNode;
};

const SideNav = () => {
  const [userPlaylistNames, setuserPlaylistNames] = useState(null);
  const history = useHistory();
  const token = localStorage.getItem("token");
  const [visibleContextMenu, setvisibleContextMenu] = useState(false);
  const [contextMenu, setcontextMenu] = useState({
    posX: 0,
    posY: 0,
    playlistId: null
  });

  function routeNewPlaylist() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      },
      body: JSON.stringify({
        name: "My Playlist",
        description: "My Playlist Description"
      })
    };
    // fetch(HOSTNAME + "playlists/", requestOptions)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(json => {
    //     history.push(`/playlists/${json.id}`);
    //   });
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    },
    body: JSON.stringify({
      onlyNamesAndId: true
    })
  };

  useEffect(() => {
    // fetch(HOSTNAME + "playlists/library/", requestOptions)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(json => {
    //     setuserPlaylistNames(json);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, [visibleContextMenu]);

  const handlePlaylistContextMenu = (event, id) => {
    event.preventDefault();
    setvisibleContextMenu(true);
    setcontextMenu({
      posX: event.clientY,
      posY: event.clientX,
      playlistId: id
    });
  };

  const changeVisibleContextMenu = () => {
    setvisibleContextMenu(false);
  };

  return (
    <div className="sideNavContainer">
      <ul className="sideNavList">
        <li onClick={() => history.push("/")}>
          <img className="logo" src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"></img>
        </li>
        <li className="list" onClick={() => history.push("/")}>
          <div>
            <HomeRoundedIcon />
          </div>
          <div>Home</div>
        </li>
        <li className="list" onClick={() => history.push("/search")}>
          <div>
            <SearchRoundedIcon />
          </div>
          <div>Search</div>
        </li>
        <li className="list" onClick={() => history.push("/collection/playlists")}>
          <div>
            <LibraryMusicRoundedIcon />
          </div>
          <div>Library</div>
        </li>
        <li className="list" onClick={routeNewPlaylist}>
          <div>
            <PlaylistAddRoundedIcon />
          </div>
          <div>Create Playlist</div>
        </li>
        <li className="list" onClick={() => history.push("/collection/musics")}>
          <div>
            <FavoriteRoundedIcon />
          </div>
          <div>Liked Songs</div>
        </li>
      </ul>
      <hr
        style={{
          color: "rgb(255, 255, 255)",
          marginLeft: "25px",
          marginRight: "25px"
        }}
      />
      {/* <ul id="sideNavList">
        {userPlaylistNames &&
          userPlaylistNames.constructor === Array &&
          userPlaylistNames.map(playlist => {
            return (
              <li
                key={playlist.id}
                onContextMenu={e => handlePlaylistContextMenu(e, playlist.id)}
                // style={{ fontWeight: "600" }}
                onClick={() => history.push(`/playlists/${playlist.id}`)}>
                {playlist.name}
              </li>
            );
          })}
      </ul> */}
      {/* {visibleContextMenu && <PlaylistContextMenu contextMenu={contextMenu} changeVisibleContextMenu={changeVisibleContextMenu} />} */}
    </div>
    // <h2
    //   style={{
    //     color: "white",
    //     minHeight: "200vh",
    //     position: "sticky",
    //     top: "0"
    //   }}>
    //   Heading h2
    // </h2>
  );
};

// function PlaylistContextMenu(props) {
//   const token = localStorage.getItem("token");

//   const contextMenuStyle = {
//     position: "absolute",
//     top: `${props.contextMenu.posX + 20}`,
//     left: `${props.contextMenu.posY}`,
//     padding: "8px",
//     backgroundColor: "rgb(18, 18, 18)",
//     color: "white",
//     listStyleType: "none",
//     border: "1px solid white"
//   };

//   const deleteRequestOptions = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Token ${token}`
//     }
//   };

//   const deletePlaylist = (id, changeVisibleContextMenu) => {
//     fetch(HOSTNAME + `playlists/${id}/`, deleteRequestOptions)
//       .then(response => {
//         if (response.status === 204) {
//           changeVisibleContextMenu();
//         }
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   let domNode = useClickOutside(() => {
//     // custom hook
//     props.changeVisibleContextMenu(false);
//   });

//   return (
//     <div style={contextMenuStyle} ref={domNode}>
//       <li id="contextMenuItem" onClick={() => deletePlaylist(props.contextMenu.playlistId, props.changeVisibleContextMenu)}>
//         Delete
//       </li>
//     </div>
//   );
// }

export { SideNav };
