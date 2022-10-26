import styles from "./MusicCard.module.css";
import React, { useRef, useEffect, useState } from "react";
import albumCover from "../../images/newsCardImage.png";
import playBtn from "../../images/playBtn.svg";
import pauseBtn from "../../images/pauseBtn.svg";

function MusicCard({ song }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState({});
    const audioElement = useRef();

    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        }
        else {
            audioElement.current.pause();
        }

    }, [isPlaying]);


    const playPause = () => {
        setIsPlaying((oldState) => !oldState);
    };
    const onPlaying = () => {
        const duration = audioElement.current.duration;
        const currentTime = audioElement.current.currentTime;
        setCurrentSong({ ...currentSong, "progress": currentTime / duration * 100, length: duration });
    };

    return (
        <div className={`${styles["audio-player"]} mb-3`}>
            <div className={`${styles["song-details-container"]}`}>
                <img src={albumCover} className={`${styles["album-image"]}`} />
                <div className={`${styles["audio-wrapper"]}`} id="player-container">
                    <audio id="player" ref={audioElement} onTimeUpdate={onPlaying}>
                        <source src={song} type="audio/mp3" preload="metadata" />
                    </audio>
                </div>
                <p className={`${styles["song-name"]}`}>Mutiyare Ni Song | Gippy Grewal</p>
            </div>
            <div className={`${styles["play-btn-container"]}`}>
                <button className={`${styles["play-btn"]}`} onClick={playPause}>
                    {isPlaying ? <img className={`${styles["play-btn-icon"]}`} src={pauseBtn}></img> :
                        <img className={`${styles["play-btn-icon"]}`} src={playBtn}></img>}

                </button>
            </div>
        </div>
    );
}

export default MusicCard;