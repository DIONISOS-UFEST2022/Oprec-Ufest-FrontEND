import {
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
} from "@chakra-ui/react";


export function Profile(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (<>
        {/* This is profile button */}
        <Button onClick={onOpen} className="NavbarMenu">Profile</Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent className="NavModal">
                <div class="menu">
                    <ul class="menu-list">
                        <li class="menu-item"><button class="menu-button"><i data-feather="corner-up-right"></i>Share</button></li>
                        <li class="menu-item"><button class="menu-button"><i data-feather="edit-2"></i>Rename</button></li>
                    </ul>
                    <ul class="menu-list">
                        <li class="menu-item"><button class="menu-button menu-button--black"><i data-feather="circle"></i>No status<i data-feather="chevron-right"></i></button>
                            <ul class="menu-sub-list">
                                <li class="menu-item"><button class="menu-button menu-button--orange"><i data-feather="square"></i>Needs review</button></li>
                                <li class="menu-item"><button class="menu-button menu-button--purple"><i data-feather="octagon"></i>In progress</button></li>
                                <li class="menu-item"><button class="menu-button menu-button--green"><i data-feather="triangle"></i>Approved</button></li>
                                <li class="menu-item"><button class="menu-button menu-button--black menu-button--checked"><i data-feather="circle"></i>No status<i data-feather="check"></i></button></li>
                            </ul>
                        </li>
                        <li class="menu-item"><button class="menu-button"><i data-feather="link"></i>Copy Link Address</button></li>
                        <li class="menu-item"><button class="menu-button"><i data-feather="folder-plus"></i>Move to</button></li>
                        <li class="menu-item"><button class="menu-button"><i data-feather="copy"></i>Copy to</button></li>
                        <li class="menu-item"><button class="menu-button"><i data-feather="lock"></i>Make Private</button></li>
                        <li class="menu-item"><button class="menu-button"><i data-feather="download"></i>Download</button></li>
                    </ul>
                    <ul class="menu-list">
                        <li class="menu-item"><button class="menu-button menu-button--delete"><i data-feather="trash-2"></i>Delete</button></li>
                    </ul>
                </div>
            </ModalContent>
        </Modal>
    </>)
}
