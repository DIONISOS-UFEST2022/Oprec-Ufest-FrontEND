import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function JoinPage0() {
    return (
        <>
            <p><strong>Before we start, prepare :</strong></p>
            <Divider />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "green" }}>1</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Third COVID-19 Vaccine Certificate"
                        secondary={
                            <React.Fragment>
                                {"Third COVID-19 vaccine certificate, in jpg or png format. Maks size is 1 MB. "}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "green" }}>2</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Portofolio (for Visual and Documentation Division)"
                        secondary={
                            <React.Fragment>
                                {"Specifically for the Visual and Documentation division. "}
                                {"Portfolio is uploaded to Google Drive. Make sure the link is publicly accessible."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </>
    );
}