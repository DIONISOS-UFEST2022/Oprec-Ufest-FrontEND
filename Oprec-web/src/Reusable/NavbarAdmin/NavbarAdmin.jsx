import { Box, Button } from "@chakra-ui/react";
import {
    Flex,
    Avatar,
    Text,
    Badge,
    Grid, GridItem, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal,
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
// import { AllContext } from "../Context/AllContext";
import "./NavbarAdmin.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { selectPage, setPage } from "../../Redux/features/page/pageSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";

function Profile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // log out? kinda
    // const { Setuser } = useContext(AllContext);
    const user = useSelector(selectuserRole);
    // function Logout() {
    //     Setuser('guest');
    //     onClose();
    // }

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
                    // onClick={Logout}
                    >
                        LOG OUT
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>)
}





function NavbarButton(props) {
    return (
        <Box color={props.color} className={props.className} as="button" onClick={props.onClick}>{props.Title}</Box>
    )
}

export function NavbarAdmin(props) {
    // const { page, setpage } = useContext(AllContext);
    const page = useSelector(selectPage);
    const user = useSelector(selectuserRole);
    const dispatch = useDispatch();
    return (
        <>
            <Box className="Navbar"
                width={"100%"}
            >
                <NavbarButton color={page === "database" ? "red" : "white"} className="NavbarMenu" Title={"Database"} onClick={() => { dispatch(pageChanged('database')) }} />
                <NavbarButton color={page === "division" ? "red" : "white"} className="NavbarMenu" Title={"Division"} onClick={() => { dispatch(pageChanged('division')) }} />
                <NavbarButton color={page === "feature" ? "red" : "white"} className="NavbarMenu" Title={"Feature"} onClick={() => { dispatch(pageChanged('feature')) }} />
                <Profile />

            </Box>
            <Box className="NavbarMobile"
                width={"100%"}
            >
                <Popover>
                    <PopoverTrigger>
                        <Button className="NavbarMobileTrigger">=</Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <Box className="NavbarMobileMenu">
                                    <NavbarButton className="MenuItem" Title={"Home"} onClick={() => { props.handleClick('home'); }} />
                                    <br />
                                    <NavbarButton className="MenuItem" Title={"About"} onClick={() => { props.handleClick('about'); }} />
                                    <br />
                                    <NavbarButton className="MenuItem" Title={"Division"} onClick={() => { props.handleClick('divison'); }} />
                                    <br />
                                    <NavbarButton className="MenuItem" Title={"Login"} onClick={() => { props.handleClick('login'); }} />
                                </Box>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>

            </Box>
        </>

    )
}