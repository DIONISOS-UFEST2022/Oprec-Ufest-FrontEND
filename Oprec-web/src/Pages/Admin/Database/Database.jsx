import {
    Table,
    Thead,
    Tbody,
    Tfoot,
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

export function Database(props) {
    const dispatch = useDispatch();
    const [MapData, setMapData] = useState([]);
    const token = useSelector(selectuserToken);
    const user = useSelector(selectUser);
    const [userData, SetuserData] = useState([]);
    const [query, setQuery] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/users", {
            headers:
                { Authorization: `Bearer ${token}` }
        })
            .then((result) => {
                // console.log(result.data.data[0].name);
                SetuserData(result.data.data);
                // setMapData(result.data[0].name);
            })
            .catch((err) => {
                // alert("Verification failed");
                console.log(err);
            })
    }, [])
    return (
        <Box className="database">
            <Analytic lenght={userData.length} />
            <br />
            <Divider />
            <br />
            <Input className='input' type="text" placeholder='Enter Query' onChange={event => { setQuery(event.target.value) }} />
            <TableContainer className='databaseTabel'>
                <Heading overflow={"hidden"}>Database</Heading>
                <Table variant='simple'>
                    <TableCaption>End of Data</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Nama</Th>
                            <Th>Jurusan/Angkatan</Th>
                            <Th>NIM</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {userData.filter(post => {
                            if (query === '') {
                                return post;
                            } else if (post.name.toString().toLowerCase().includes(query.toString().toLowerCase()) || post.nim.includes(query)) {
                                return post;
                            }
                        }).map((post, index) => (
                            <DatabaseCard key={index} name={post.name} jurusan={post.jurusan} angkatan={post.angkatan} nim={post.nim} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>)
}