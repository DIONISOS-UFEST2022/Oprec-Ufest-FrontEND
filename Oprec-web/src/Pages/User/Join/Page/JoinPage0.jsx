import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import './JoinPage0.scss';

const CustomListItemText = styled(ListItemText)(({ theme }) => ({
    // fontFamily: "Rocket-Vintage",
    margin: "10px",
}));

const CustomList = styled(List)(({ theme }) => ({
    // fontFamily: "Rocket-Vintage",
    // margin: "10px",
    background: "rgb(0 0 0 0)"
}));



const title1 = <div className='title'>Third COVID-19 Vaccine Certificate</div>;
const title2 = <div className='title'>Portofolio (for Visual and Documentation Division)</div>;
const desc1 = <div className='desc'>Third COVID-19 vaccine certificate, in jpg or png format. Maks size is 1 MB.</div>


export default function JoinPage0() {
    return (
        <div className='JoinPage0'>
            <p><strong>Before we start, prepare :</strong></p>
            <Divider />
            <CustomList >
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "green" }}>1</Avatar>
                    </ListItemAvatar>
                    <CustomListItemText
                        primary={title1}
                        secondary={desc1}
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "green" }}>2</Avatar>
                    </ListItemAvatar>
                    <CustomListItemText
                        primary={title2}
                        secondary={
                            <div className='desc'>
                                {"Specifically for the Visual and Documentation division. "}
                                {"Portfolio is uploaded to Google Drive. Make sure the link is publicly accessible."}
                            </div>
                        }
                    />
                </ListItem>
            </CustomList>
        </div>
    );
}