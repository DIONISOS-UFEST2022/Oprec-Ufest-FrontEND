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
import { Dummydata } from "./dummy"


function DivisionDetailCard(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.name} ({props.nim})</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <br />
                        {props.angkatan}
                        <br />
                        {props.divisi}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Stack align='center' direction='row'>
                            <Switch size='lg' />
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Tr>
                <Td>{props.name}</Td>
                <Td>{props.jurusan}/{props.angkatan}</Td>
                <Td>
                    <Button onClick={onOpen}>See Detail</Button>
                </Td>
            </Tr>
        </>
    )
}


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