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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Image,
    Heading,
    Box,
    Divider
} from '@chakra-ui/react'
import axios from "axios";
import { useEffect, useState } from "react";
import "./Database.scss";
import { Dummydata } from "./../Division/dummy";

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
    const [MapData, setMapData] = useState([]);
    // useEffect(() => {
    //     axios.get("http://127.0.0.1:8000/api/test").then((res) => {
    //         setMapData(res.data)
    //         console.log(res.data)
    //     })
    // },[])

    return (
        <Box className="database">
            <Analytic lenght={Dummydata.length} />
            <br />
            <Divider />
            <br />
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
                        {Dummydata.map((data) => {
                            return <DatabaseCard divisi={data.divisi} name={data.name} jurusan={data.jurusan} angkatan={data.angkatan} nim={data.nim} />
                        })
                        }
                    </Tbody>
                    <Tfoot>
                        {/* <Tr>
                        <Th>Nama</Th>
                        <Th>Jurusan/Angkatan</Th>
                        <Th>NIM</Th>
                    </Tr> */}
                    </Tfoot>
                </Table>
            </TableContainer>
            {MapData.map((data) => {
                return <DatabaseCard data={data} />
            })}
        </Box>)
}