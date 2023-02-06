
import React from 'react'
import CustomButton from '../CustomComponent/CustomButton'
import { setCookie } from "react-use-cookie";
import { useDispatch } from 'react-redux';
import { userCanPlay } from '../../Redux/features/users/userSoundSlice';

export function LoadingScreenInitial(props) {
    const dispatch = useDispatch();
    function Handler() {
        setCookie('AllowSound', false);
        dispatch(userCanPlay(false));
    }

    function Yes() {
        dispatch(userCanPlay(true));
        setTimeout(() => {
            props.handle();
        }, 1000);
    }

    return (
        <div className="Loading-Screen-Initial">
            <p className="Caption">
                Allow Sound ?
            </p>
            <CustomButton onClick={Yes}>
                Sure!
            </CustomButton>
            <br />
            <CustomButton onTouchEnd={Handler} onClick={Handler}>
                No
            </CustomButton>
            <br />
        </div>

    )
}