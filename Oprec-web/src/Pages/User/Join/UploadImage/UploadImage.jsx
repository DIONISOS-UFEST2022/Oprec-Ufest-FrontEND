// Styling
import { Box, Text, Image } from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";
import { useEffect, useState } from "react";
import "./UploadImage.scss"
import { useDispatch, useSelector } from "react-redux";
import { userfileAdded } from "../../../../Redux/features/users/userRoleSlice";
import { selectuserFile } from "../../../../Redux/features/users/userRoleSlice";

export function UploadImage({ file, setFile }) {
    const dispatch = useDispatch();
    const userFile = useSelector(selectuserFile);
    const fileTypes = [
        "JPEG",
        "JPG",
        "PNG",
        "IMG",
    ];
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <>
            <FileUploader
                child
                handleChange={handleChange}
                // name={props.name}
                types={fileTypes}
                multiple={false}
                maxFileSize={1000000}
                minFileSize={0}
                maxFiles={1}
                minFiles={0}
                accept="image/*"
            >
                <Box
                    classes="drop_area drop_zone"
                    className="UploadImage"
                >{file ?
                    <>
                        <Image className="img" maxH={"50px"} maxW="50px" loading="lazy" src={URL.createObjectURL(file)} />
                        <Text overflowWrap={"break-word"}>{file.name}</Text>
                    </>
                    :
                    <>
                        <Image maxH={"50px"} maxW="50px" loading="lazy" src="https://img.icons8.com/fluency/48/null/image.png" />
                        <Text>Drop your image here, or browse</Text>
                        <Text className="support" fontStyle={"italic"} fontWeight="hairline">No file Uploaded yet</Text>
                    </>
                    }
                </Box>
            </FileUploader>
        </>
    );
}
