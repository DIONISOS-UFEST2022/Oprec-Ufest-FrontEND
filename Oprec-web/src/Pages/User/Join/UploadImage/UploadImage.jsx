// Styling
import { FileUploader } from "react-drag-drop-files";
import "./UploadImage.scss"

export function UploadImage({ file, setFile }) {
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
                types={fileTypes}
                multiple={false}
                maxFileSize={1000000}
                minFileSize={0}
                maxFiles={1}
                minFiles={0}
                accept="image/*"
            >
                <div
                    classes="drop_area drop_zone"
                    className="UploadImage"
                >{file ?
                    <>
                        <img className="img" loading="lazy" src={URL.createObjectURL(file)} />
                        <p className="caption" >{file.name}</p>
                    </>
                    :
                    <>
                        <img maxH={"50px"} maxW="50px" loading="lazy" src="https://img.icons8.com/fluency/48/null/image.png" />
                        <p>Drop your image here, or browse</p>
                        <p className="support" fontStyle={"italic"} fontWeight="hairline">No file Uploaded yet</p>
                    </>
                    }
                </div>
            </FileUploader>
        </>
    );
}
