import React, { useEffect } from 'react'
import BGM from "./../../../../../Asset/Sound/bgm.mp3"
import useSound from 'use-sound';
import { useDispatch, useSelector } from 'react-redux';
import { userSoundControl } from '../../../../../Redux/features/users/userSoundSlice';
import { selectSound } from '../../../../../Redux/features/users/userSoundSlice';
import "./AudioPlayButton.scss"
import { useState } from 'react';

export default function AudioPlayButton() {
    const [play, { stop, isPlaying }] = useSound(BGM, {
        volume: 0.15,
        playbackRate: 1,
    });
    const [onplay, setOnplay] = useState("");
    const dispatch = useDispatch();
    const userSound = useSelector(selectSound);
    const [open, setopen] = useState(false);
    // handler
    useEffect(() => {
        setopen(true);
        setTimeout(() => {
            setopen(false);
        }, 3000);
    }, [])


    function handler() {
        if (userSound === false) {
            play()
            dispatch(userSoundControl(true));
            setOnplay("paused");
        } else {
            stop();
            dispatch(userSoundControl(false));
            setOnplay("");
        }
    }
    return (<>
        <div onLoad={() => handler()} className='Audio-Play-Button-Wrapper ripple' onClick={handler}>
            <div className={`AudioPlayButton ${onplay}`} />
        </div>
    </>
    )
}
