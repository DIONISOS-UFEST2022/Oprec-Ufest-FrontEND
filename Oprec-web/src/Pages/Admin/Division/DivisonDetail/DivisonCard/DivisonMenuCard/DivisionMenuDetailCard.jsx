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
    Switch,
    Box,
    Badge,
    Avatar,
    Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import axios from "axios"
import { useEffect } from "react"
import "./DivisionMenuDetailCard.scss"

export function DivisionDetailCard(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Detail</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex>
                            <Avatar src='https://bit.ly/sage-adebayo' />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    {props.name} ({props.nim})
                                    <Badge ml='1' colorScheme='green'>
                                        {props.divisi}
                                    </Badge>
                                </Text>
                                <Text fontSize='sm'>{props.jurusan} - {props.angkatan}</Text>
                            </Box>
                        </Flex>
                        <Accordion>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Section 1 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Section 2 title
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
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