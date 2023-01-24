import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
    Box,
    Divider,
    Input
} from '@chakra-ui/react'
import axios from "axios";
import { useEffect, useState } from "react";
import "./Database.scss";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setUserToken, userRegister } from '../../../Redux/features/users/userDataSlice';
import { selectuserToken } from '../../../Redux/features/users/userRoleSlice';
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


function DatabaseCard(props) {
    return (
        <>
            <Tr>
                <Td>{props.name}</Td>
                <Td>{props.jurusan}/{props.angkatan}</Td>
                <Td>{props.nim}</Td>
            </Tr>
        </>
    )
}

function Analytic(props) {
    return (<Box className='Analytic'>
        <Heading overflow={"hidden"}>Analytic</Heading>
        Jumlah Peserta Oprec: {props.lenght}
    </Box>)
}


function getFullName(params) {
    return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nama', width: 130, editable: true },
    { field: 'jurusan', headerName: 'Jurusan', width: 130, editable: true },
    { field: 'angkatan', headerName: 'Angkatan', width: 130, editable: true },
    { field: 'nim', headerName: 'NIM', width: 130, editable: true },
    { field: 'email', headerName: 'Email', width: 130, editable: true },
];


export function Database(props) {
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
        <Box className="database">
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={
                        userData.map((post, index) => (
                            { id: index, name: post.name, jurusan: post.jurusan, angkatan: post.angkatan, nim: post.nim, email: post.email }
                        ))
                    }
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>

        </Box>)
}



