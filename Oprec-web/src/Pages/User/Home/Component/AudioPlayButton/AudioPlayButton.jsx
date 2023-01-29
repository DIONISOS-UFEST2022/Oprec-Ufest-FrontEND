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
        volume: 0.25,
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
        {/* <Tooltip
            open={open}
            title="Best Experince with Sound"> */}
            <div className='Audio-Play-Button-Wrapper' onClick={handler}>
                <div className={`AudioPlayButton ${onplay}`} />
            </div>
        {/* </Tooltip> */}
    </>
    )
}
