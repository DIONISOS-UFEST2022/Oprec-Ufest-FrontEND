// Styling
import { Box, Text, Image } from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import "./UploadImage.scss"


export function UploadImage(props) {
    const fileTypes = [
        "JPEG",
        "JPG",
        "PNG",
        "IMG",
    ];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
        props.onChange(file);
    };
    return (
        <>
            <FileUploader
                child
                handleChange={handleChange}
                name={props.name}
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
