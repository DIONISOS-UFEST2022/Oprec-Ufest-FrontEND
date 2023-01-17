import { Box } from "@chakra-ui/react"
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
    Stack,
    Switch
} from '@chakra-ui/react'
import axios from "axios"
import { useEffect } from "react"
import "./DivisionMenuDetail.scss"
import { Dummydata } from "../dummy"
import { DivisionDetailCard } from "./DivisonCard/DivisonMenuCard/DivisionMenuDetailCard"




export function DivisonMenu(props) {
    // useEffect(() => {
    //     axios.get("http://https://jsonplaceholder.typicode.com/todos/1").then((res) => {
    //         console.log(res.data)
    //     })
    // })

    return (<Box className="DivisionMenuDetail">
        <h1>{props.name}</h1>
        <TableContainer>
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
                        return <DivisionDetailCard divisi={data.divisi} name={data.name} jurusan={data.jurusan} angkatan={data.angkatan} nim={data.nim} />
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
    </Box>)
}