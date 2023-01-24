import { Box, Button } from "@chakra-ui/react";
import {
    Flex,
    Avatar,
    Text,
    Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NavbarButtonAdmin } from "./NavbarAdminButton/NavbarAdminButton";
import "./NavbarAdmin.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { selectPage, setPage } from "../../Redux/features/page/pageSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";

function Profile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const user = useSelector(selectuserRole);

    return (<>
        <Button onClick={onOpen} className="NavbarMenu">Profile</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Your Profile <Badge colorScheme='purple'>Admin</Badge></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex>
                        <Avatar src='https://bit.ly/sage-adebayo' />
                        <Box ml='3'>
                            <Text fontWeight='bold'>
                                Segun Adebayo
                                <Badge ml='1' colorScheme='green'>
                                    New
                                </Badge>
                            </Text>
                            <Text fontSize='sm'>UI Engineer</Text>
                        </Box>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3}
                    >
                        LOG OUT
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>)
}







export function NavbarAdmin(props) {
    const page = useSelector(selectPage);
    const user = useSelector(selectuserRole);
    const dispatch = useDispatch();
    return (
        <>
            <Box className="NavbarAdminDesktop"
                width={"100%"}
            >
                <NavbarButtonAdmin color={page === "database" ? "red" : "white"} className="NavbarMenu" Title={"Database"} onClick={() => { dispatch(pageChanged('database')) }} />
                <NavbarButtonAdmin color={page === "division" ? "red" : "white"} className="NavbarMenu" Title={"Division"} onClick={() => { dispatch(pageChanged('division')) }} />
                <NavbarButtonAdmin color={page === "feature" ? "red" : "white"} className="NavbarMenu" Title={"Feature"} onClick={() => { dispatch(pageChanged('feature')) }} />
                <Profile />

            </Box>
        </>

    )
}