import * as React from 'react';
import "./Profile.scss"
// import logouthandler from '../../Navbar/LogoutHandler/LogoutHandler';
import { getRequest } from '../../Service/AxiosClient';
import { useDispatch, useSelector } from 'react-redux';

import { pageChanged } from '../../../Redux/features/page/pageSlice';
import { userRoleAdded } from '../../../Redux/features/users/userRoleSlice';
import { Modal } from "@mui/material";
import { selectuserName } from '../../../Redux/features/users/userRoleSlice';
import { selectuserNim } from '../../../Redux/features/users/userRoleSlice';



export default function Profile(props) {
    const dispatch = useDispatch();
    const name = useSelector(selectuserName);
    const nim = useSelector(selectuserNim);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    React.useEffect(() => {
        console.log(name);
        console.log(nim);
    }, [name, nim]);
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
        <>
            <Modal
                sx={{
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='Modal-Profile'>
                    <div className=''>
                        {name}
                    </div>
                    <div className='NameDesc'>
                        {/* {nim} */}
                    </div>
                    <div className='Desc'>
                        <button className='Logout-Button' onClick={LogOut}>Log Out</button>
                    </div>
                </div>
            </Modal>
            <div onClick={handleOpen}>
                <button className='Profile-Button'>
                    Profile
                </button>
            </div>

        </>
    );
}