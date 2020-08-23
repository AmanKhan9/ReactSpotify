import React,{useEffect} from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromURL } from './components/Spotify/Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import {useDataLayerValue} from './context/DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  //const [token,setToken] = useState(null);
  const [{user,token},dispatch] = useDataLayerValue();
  useEffect(() => {
    const _token = getTokenFromURL().access_token;
    window.location.hash="";
    console.log(_token);
    if(_token){
      //setToken(_token); 
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify  
      });
      dispatch({
        type : 'SET_TOKEN',
        token : _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        dispatch({
          type : 'SET_USER',
          user : user
        });
      });

      spotify.getUserPlaylists().then(playlists=>{
        dispatch({
          type : 'SET_PLAYLIST',
          playlists : playlists
        })
      })
      spotify.getPlaylist("37i9dQZEVXcFDtNltYhc9I?si=tQRKT2ItSraPcITHuYwvVQ").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );
    }
  }, [])

  return (
     <div className="app">
      {!token && <Login />}
      {token && <MusicPlayer spotify={spotify} />}
    </div>
  );
}

export default App;
