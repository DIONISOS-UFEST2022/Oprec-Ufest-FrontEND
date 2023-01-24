import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectuserRole } from '../../../../Redux/features/users/userRoleSlice';
import { pageChanged } from '../../../../Redux/features/page/pageSlice';
import React from 'react';
import './HomeButton.scss';
import { Box } from '@chakra-ui/react';
import useSound from 'use-sound';
import clickclock from "./../../../../Asset/Sound/clickclock.mp3"

export function HomeButton() {
    const [play] = useSound(clickclock, {
        sprite: {
            click: [200, 210],
            clock: [350, 400]
        }
    });
    const dispatch = useDispatch();
    const userRole = useSelector(selectuserRole);
    // handler
    function handler() {
        play({ id: 'clock' })
        setTimeout(() => {
            if (userRole === "guest") {
                dispatch(pageChanged("login"));
            } else {
                dispatch(pageChanged("join"));
            }
        }, 200);
    }
    return (
        <button className="HomeButton" onMouseDown={() => play({ id: 'click' })} onTouchEnd={handler} onMouseUp={handler}>
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front">
                LET'S GO SPARTA!
            </span>
        </button>
    )
}
