import axios from "axios";
import { useEffect, useState } from "react";
import "./Database.scss";
import { useSelector } from 'react-redux';
import { selectuserToken } from '../../../Redux/features/users/userRoleSlice';
import { DataGrid, GridToolbar, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';



const ODD_OPACITY = 0.2;

const CustomGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
        backgroundColor: theme.palette.grey[200],
        '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&.Mui-selected': {
            backgroundColor: alpha(
                theme.palette.primary.main,
                ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY +
                    theme.palette.action.selectedOpacity +
                    theme.palette.action.hoverOpacity,
                ),
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        ODD_OPACITY + theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    },
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nama', width: 130, editable: true },
    { field: 'jurusan', headerName: 'Jurusan', width: 130, editable: true },
    { field: 'angkatan', headerName: 'Angkatan', width: 130, editable: true },
    { field: 'nim', headerName: 'NIM', width: 130, editable: true },
    { field: 'email', headerName: 'Email', width: 130, editable: true },
];

export default function Database(props) {
    const token = useSelector(selectuserToken);
    const [userData, SetuserData] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/users", {
            headers:
                { Authorization: `Bearer ${token}` }
        })
            .then((result) => {
                SetuserData(result.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className="database">
            <CustomGrid
                rowHeight={30}
                rows={
                    userData.map((post, index) => (
                        { id: index, name: post.name, jurusan: post.jurusan, angkatan: post.angkatan, nim: post.nim, email: post.email }
                    ))
                }
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                }
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                componentsProps={{
                    densityMenu: {
                        sx: {
                            '& .MuiTypography-root': {
                                color: 'dodgerblue',
                                fontSize: 20,
                                margin: '20px',
                                width: '200px',
                            }
                        },
                    },
                    columnsPanel: {
                        sx: {
                            '& .MuiTypography-root': {
                                color: 'red',
                                fontSize: 20,
                                margin: '20px',
                                width: '200px',
                            }
                        }
                    },
                    footer: {
                        backgroundColor: 'red',
                    }
                }}
            />
        </div>)
}



