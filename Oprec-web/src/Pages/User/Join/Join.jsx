import {
    Box, Text, Link, Select, Checkbox, CheckboxGroup, Textarea, background, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from "@chakra-ui/react";
import "./Join.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { CustomButton } from "../../../Reusable/CustomButton/CustomButton";
import { Field } from "formik";
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { FileUploader } from "react-drag-drop-files";
import Thankyou from "./Thankyou";
import { Autocomplete } from "@mui/material";
import TextField from '@mui/material/TextField';
import { JurusanData } from "./AutoComplete";

// Dekorasi
// Publikasi
// Keamanan
// Fresh Money
// Sponsor
// Dokumentasi
// Acara
// Perlengkapan
// Lomba
// Konsumsi
// Website
// Visual



function DragDrop() {
    const fileTypes = [
        "JPEG",
        "JPG",
        "PNG",
        "IMG",
    ];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <>
            <FileUploader
                child
                handleChange={handleChange}
                name="file"
                types={fileTypes}
            >
                <Box classes="drop_area drop_zone" className="files">
                    <Text>Drag and drop your file here</Text>
                    <Text>JPG/PNG</Text>
                </Box>
            </FileUploader>
            {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
        </>
    );
}


// Creating schema
const schema = Yup.object().shape({
    jurusan: Yup.string()
        .required("Jurusan is a required field"),
    angkatan: Yup.string()
        .required("Angkatan is a required field"),
    alamat: Yup.string()
        .required("Alamat is a required field"),
    vaksin: Yup.string()
        .required("Vaksin is a required field"),
    nohp: Yup.string()
        .required("No HP is a required field"),
    idline: Yup.string()
        .required("ID Line is a required field"),
    ig: Yup.string()
        .required("Instagram is a required field"),
    domisili: Yup.string()
        .required("Domisili is a required field"),
    pertanyaan: Yup.string()
        .required("Pertanyaan is a required field"),
    divisi: Yup.string()
        .oneOf([
            "Dekorasi",
            "Publikasi",
            "Keamanan",
            "Fresh Money",
            "Sponsor",
            "Dokumentasi",
            "Acara",
            "Perlengkapan",
            "Lomba",
            "Konsumsi",
            "Website",
            "Visual"
        ])
        .required("Division is a required field"),
    divisialt: Yup.string()
        .required("Division is a required field"),
    fullname: Yup.string()
        .required("Full Name is a required field"),
    nim: Yup.string()
        .required("NIM is a required field")
        .min(10, "Enter a valid NIM"),
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
    repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    jawaban: Yup.string()
        .required("Answer is a required field"),
    jawaban2: Yup.string()
        .required("Answer is a required field"),
    jawaban3: Yup.string()
        .required("Answer is a required field"),

});

export function Join(props) {
    // next input when press enter
    const formInput = useRef(null);
    const titleRef = useRef(null);
    const EnterHandleClick = (e) => {
        if (e.key === 'Enter') {
            formInput.current.focus()
        }
    }
    const [joinpage, Setjoinpage] = useState(0);
    return (
        <Box className="Join" ref={titleRef}>
            <Formik
                validationSchema={schema}
                initialValues={{ input: "", password: "", fullname: "", nim: "", repassword: "", email: "", jurusan: "", angkatan: "", alamat: "", vaksin: "", pertanyaan: "", nohp: "", idline: "", ig: "", domisili: "", divisi: "", divisialt: "", jawaban: "", jawaban2: "", jawaban3: "" }}
                onSubmit={(values) => {
                    // Alert the input values of the form that we filled
                    alert(JSON.stringify(values));
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div className="join" >
                        <div className="form">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                                <span className="JoinTitle">JOIN US!</span>
                                <br />
                                {(() => {
                                    switch (joinpage) {
                                        case 0:
                                            return (<>
                                                <Box className="wrapper">
                                                    Hal hal yang perlu dipersiapkan:
                                                    <ol>
                                                        <li className="list">Sertifikat vaksin Covid-19 ketiga</li>
                                                        <li className="list">Link Google Drive berisi Portofolio khusus Divisi Dokumentasi dan Visual</li>
                                                    </ol>
                                                </Box>
                                                <button type="button" onClick={() => {
                                                    Setjoinpage(1)
                                                    titleRef.current.scrollIntoView({ behavior: 'smooth' })
                                                }}>Next</button>
                                            </>)
                                        case 1:
                                            return (<>
                                                {/* jurusan */}
                                                <input
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="jurusan"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    // value={values.jurusan}
                                                    placeholder="Masukan Jurusan"
                                                    className="form-control inp_text"
                                                    id="jurusan"
                                                />
                                                <Autocomplete
                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={JurusanData}
                                                    sx={{ width: 300 }}
                                                    renderInput={(params) => <TextField {...params} label="Jurusan" />}
                                                />
                                                <p className="error">
                                                    {errors.jurusan && touched.jurusan && errors.jurusan}
                                                </p>
                                                {/* angkatan */}
                                                <select
                                                    id="angkatan"
                                                    name="angkatan"
                                                    placeholder="Pilih Angkatan"
                                                    className="form-control inp_text inp_option"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                // value={values.angkatan}
                                                >
                                                    <option value='select' selected hidden>Plih Angkatan</option>
                                                    <option value='2020'>2020</option>
                                                    <option value='2021'>2021</option>
                                                    <option value='2022'>2022</option>
                                                </select>
                                                <p className="error">
                                                    {errors.angkatan && touched.angkatan && errors.angkatan}
                                                </p>
                                                {/* alamat */}
                                                <input
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="alamat"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.alamat}
                                                    placeholder="Masukan alamat"
                                                    className="form-control inp_text"
                                                    id="alamat"
                                                />
                                                <p className="error">
                                                    {errors.alamat && touched.alamat && errors.alamat}
                                                </p>
                                                {/* Sudah Vaksin ke-3 */}
                                                <Box className="wrapper">
                                                    <Text className="TextLabel">Sudah Vaksin ke 3</Text>
                                                    <RadioGroup
                                                        onChange={handleChange} onBlur={handleBlur} name="vaksin">
                                                        <Stack spacing={3} direction='row'>
                                                            <Radio className="form-control " value='sudah'>Sudah</Radio>
                                                            <Radio className="form-control " value='belum'>Belum</Radio>
                                                        </Stack>
                                                    </RadioGroup>
                                                    <DragDrop />

                                                </Box>

                                                <p className="error">
                                                    {errors.fullname && touched.fullname && errors.fullname}
                                                </p>
                                                {/* No Handphone */}
                                                <input
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="nohp"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.nohp}
                                                    placeholder="Nomor Handphone Aktif"
                                                    className="form-control inp_text"
                                                    id="nohp"
                                                />
                                                <p className="error">
                                                    {errors.nohp && touched.nohp && errors.nohp}
                                                </p>
                                                {/* ID Line */}
                                                <input
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="idline"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.idline}
                                                    placeholder="ID Line"
                                                    className="form-control inp_text"
                                                    id="idline"
                                                />
                                                <p className="error">
                                                    {errors.idline && touched.idline && errors.idline}
                                                </p>
                                                {/* Instagram */}
                                                <input
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="ig"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.ig}
                                                    placeholder="Akun Instagram Aktif"
                                                    className="form-control inp_text"
                                                    id="ig"
                                                />
                                                <p className="error">
                                                    {errors.ig && touched.ig && errors.ig}
                                                </p>
                                                {/* Kota Domisili */}
                                                <input
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="domisili"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.domisili}
                                                    placeholder="Kota Domisili"
                                                    className="form-control inp_text"
                                                    id="domisili"
                                                />
                                                <p className="error">
                                                    {errors.domisili && touched.domisili && errors.domisili}
                                                </p>
                                                {/* divisi */}
                                                <select id="divisi"
                                                    name="divisi"
                                                    placeholder="Pilih Divisi"
                                                    className="form-control inp_text inp_option"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                // value={values.divisi}
                                                >
                                                    <option value='select' selected hidden>Plih Divisi</option>
                                                    <option value='Dekorasi'>Dekorasi</option>
                                                    <option value='Publikasi'>Publikasi</option>
                                                    <option value='Keamanan'>Keamanan</option>
                                                    <option value='Fresh Money'>Fresh Money</option>
                                                    <option value='Sponsor'>Sponsor</option>
                                                    <option value='Dokumentasi'>Dokumentasi</option>
                                                    <option value='Acara'>Acara</option>
                                                    <option value='Perlengkapan'>Perlengkapan</option>
                                                    <option value='Lomba'>Lomba</option>
                                                    <option value='Konsumsi'>Konsumsi</option>
                                                    <option value='Website'>Website</option>
                                                    <option value='Visual'>Visual</option>
                                                </select>
                                                <p className="error">
                                                    {errors.divisi && touched.divisi && errors.divisi}
                                                </p>
                                                <select id="divisi"
                                                    name="divisi"
                                                    placeholder="Pilih Divisi"
                                                    className="form-control inp_text inp_option"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}

                                                >
                                                    <option value='select' selected hidden>Plih Divisi Alternatif</option>
                                                    <option value='Dekorasi'>Dekorasi</option>
                                                    <option value='Publikasi'>Publikasi</option>
                                                    <option value='Keamanan'>Keamanan</option>
                                                    <option value='Fresh Money'>Fresh Money</option>
                                                    <option value='Sponsor'>Sponsor</option>
                                                    <option value='Dokumentasi'>Dokumentasi</option>
                                                    <option value='Acara'>Acara</option>
                                                    <option value='Perlengkapan'>Perlengkapan</option>
                                                    <option value='Lomba'>Lomba</option>
                                                    <option value='Konsumsi'>Konsumsi</option>
                                                    <option value='Website'>Website</option>
                                                    <option value='Visual'>Visual</option>
                                                </select>
                                                <p className="error">
                                                    {errors.divisi && touched.divisi && errors.divisi}
                                                </p>

                                                <button type="button" onClick={() => {
                                                    Setjoinpage(2);
                                                    titleRef.current.scrollIntoView({ behavior: 'smooth' });
                                                }}>Next</button>
                                            </>);
                                        case 2:
                                            return (<>
                                                <Text className="Wrapper">Apa yang kamu ketahui tentang U-FEST?</Text>
                                                <br />
                                                <Textarea
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="jawaban"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.jawaban}
                                                    placeholder="Jawaban"
                                                    className="form-control inp_text"
                                                    id="jawaban"
                                                />
                                                <p className="error">
                                                    {errors.jawaban && touched.jawaban && errors.jawaban}
                                                </p>
                                                <button type="button" onClick={() => {
                                                    Setjoinpage(3);
                                                    titleRef.current.scrollIntoView({ behavior: 'smooth' });
                                                }}>Next</button>
                                            </>);
                                        case 3:
                                            return (<>
                                                <Text className="Wrapper">Berdasarkan Divisi yang kamu pilih, menurut kamu sifat apa saja yang diperlukan untuk menjadi bagian dari divisi tersebut?</Text>
                                                <br />
                                                <Textarea
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="jawaban2"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.jawaban2}
                                                    placeholder="Jawaban"
                                                    className="form-control inp_text"
                                                    id="jawaban2"
                                                />
                                                <p className="error">
                                                    {errors.jawaban2 && touched.jawaban2 && errors.jawaban2}
                                                </p>
                                                <button type="button" onClick={() => {
                                                    Setjoinpage(4)
                                                    titleRef.current.scrollIntoView({ behavior: 'smooth' });
                                                }}>Next</button>
                                            </>)
                                        case 4:
                                            return (<>
                                                <Text className="Wrapper">Upload Portofolio</Text>
                                                <button type="button" onClick={() => {
                                                    Setjoinpage(5)
                                                    titleRef.current.scrollIntoView({ behavior: 'smooth' });
                                                }}>Next</button>
                                            </>)

                                        case 5:
                                            return (<>
                                                <Thankyou />
                                            </>)
                                        default:
                                            return null;
                                    }
                                })()}

                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </Box>

    );
}


// Dekorasi
// Publikasi
// Keamanan
// Fresh Money
// Sponsor
// Dokumentasi
// Acara
// Perlengkapan
// Lomba
// Konsumsi
// Website
// Visual