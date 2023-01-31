import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import "./Profile.scss"
// import logouthandler from '../../Navbar/LogoutHandler/LogoutHandler';
import { getRequest } from '../../Service/AxiosClient';
import { useDispatch } from 'react-redux';
// import { pageChanged } from '../../Redux/features/page/pageSlice';
// import { userRoleAdded } from '../../Redux/features/users/userRoleSlice';
import { pageChanged } from '../../../Redux/features/page/pageSlice';
import { userRoleAdded } from '../../../Redux/features/users/userRoleSlice';

export default function Profile(props) {
    const dispatch = useDispatch();
    async function LogOut() {
        try {
            const login = await getRequest("logout");
            if (login.data.success === true) {
                localStorage.removeItem('LoginID');
                dispatch(pageChanged('login'));
                dispatch(userRoleAdded('guest'));
            }
        } catch (error) {
            console.error(error);
        }
    }
    // LogOut();
    return (
        <PopupState className='Profile' variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div>
                    <button className='Profile-Button' {...bindToggle(popupState)}>
                        Profile
                    </button>
                    <Popper {...bindPopper(popupState)} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <div className='Profile-Container'>
                                        {props.children}
                                    </div>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
            )}
        </PopupState>
    );
}