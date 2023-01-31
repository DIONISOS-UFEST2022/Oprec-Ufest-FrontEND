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
            <p>Yang harus dipersiapkan :</p>
            <Divider />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="1" sx={{ bgcolor: "green" }} src="/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Sertifikat Covid-19"
                        secondary={
                            <React.Fragment>
                                {"Sertifikat Covid-19 dalam format JPG/PNG maksimal 1MB"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="2" sx={{ bgcolor: "green" }} src="/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Portofolio (Opsional)"
                        secondary={
                            <React.Fragment>
                                {"Khusus untuk divisi Visual dan Dokumentasi. "}
                                {"Portofolio di upload ke dalam Google Drive. Pastikan tautannya dapat diakses publik."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </>
    );
}