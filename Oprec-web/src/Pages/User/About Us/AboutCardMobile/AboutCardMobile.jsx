import "./AboutCardMobile.scss"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200px',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};



function AboutCardMobile(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                <Box>
                    <div className='Modal'>
                        <div className='Title'>
                            {props.title}
                        </div>
                    </div>
                </Box>
            </Modal>
            <div onClick={handleOpen} className='About-Card-Mobile'>
                <img src={props.logo} className="Image" />
                <div className='Title'>
                    {props.title}
                </div>
                <p className='Desc'>
                    {props.desc}
                </p>
            </div>
        </>
    )
}





export default AboutCardMobile;