import React, { useState, useEffect } from "react";
import "./lastfmApi.css";
import playbar from '../statics/Play bar.svg'
import head from '../statics/headshot_portfolio.png'

export const Lastfmdata = ({ userName, apiKey }) =>{
  const [lfmData, updateLfmData] = useState({});
  
  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => updateLfmData(data))
      .catch(() =>
        updateLfmData({ error: 'lastFM did not send the data' })
      );
  }, []);
  
  const buildLastFmData = () => {
    const  { error } = lfmData;
    const track = lfmData?.recenttracks?.track;
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!track) {
      return <p>Loading</p>;
    }
  
    const [
      { name: songName, artist: { '#text': artistName }, image: cover = {} } = {}
    ] = track;
    return(
        <div className="headshot">
          <img src={head} className='headshot-pic' />
          <img className="headshot-back" src='headshot_background.svg' />
            <div className="playing">
                <img className="albumCover" src={cover[3]['#text']} />
                <div className="soundBar">
                    <span className="sound-title">NOW PLAYING:</span><br />
                      <div className="song-info">      
                        <a href={`https://music.apple.com/us/search?term=${songName}`} target="_blank">
                          <div className="song-name">{songName}</div>
                        </a>
                        <div className="artist-name"> - {artistName}</div>
                    </div>
                    <img className="play-bar"src={playbar} />
                </div>
                <div className="pause">
                  I  I
                </div>
            </div>
        </div>
    );
  };

  return buildLastFmData();
};
