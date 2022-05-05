import React, { useState, useEffect } from "react";
import { Playlist } from "./Playlist";
import Grid from "../libs/Grid";
import { HOSTNAME } from "../spotify.constants.js";
import { getAuth } from "@firebase/auth";

function AllPlaylists() {
  const arr = [
    { id: "sss", sdf: "sdf" },
    { id: "okok", sdf: "sdf" }
  ];
  const [AllPlaylistData, setAllPlaylistData] = useState<Array<any>>(arr);
  const token = localStorage.getItem("token");
  console.log("all playlists");

  // console.log("auth", getAuth())

  // useEffect(() => {
  //   fetch(HOSTNAME + "playlists/", {
  //     headers: {
  //       Authorization: `Token ${token}`
  //     }
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(myJson => {
  //       setAllPlaylistData(myJson);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <Grid>
      {AllPlaylistData &&
        AllPlaylistData.map(playlist => {
          return <Playlist key={playlist.id} {...playlist} />;
        })}
    </Grid>
  );
}

export default AllPlaylists;
