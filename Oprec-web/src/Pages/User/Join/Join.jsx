// Styling
import "./Join.scss";
import Autocomplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";
import Button from "@material-ui/core/Button";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
// Form Control
import { Formik } from "formik";
// React
import { useRef, useState } from "react";
// Module
import Thankyou from "./Thankyou/Thankyou";
import { DivisiData, JurusanData } from "./AutoComplete/AutoComplete";
import { JoinSchema } from "./JoinSchema";
import { CustomTextField } from "../../../Reusable/TextField/CustomTextField";
import { UploadImage } from "./UploadImage/UploadImage";
import JoinPage0 from "./Page/JoinPage0";
import Sparkles from "../../../Reusable/Animation/Sparkle/Sparkle";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { selectuserName, selectuserEmail, selectuserNim } from "../../../Redux/features/users/userRoleSlice";


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





const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));




export default function Join(props) {

    const [file, setFile] = useState(null);
    const [loading, Setloading] = useState(false);
    const name = useSelector(selectuserName);
    const nim = useSelector(selectuserNim);
    const email = useSelector(selectuserEmail);
    const formInput = useRef(null);
    const titleRef = useRef(null);
    const EnterHandleClick = (e) => {
        if (e.key === 'Enter') {
            formInput.current.focus()
        }
    }
    const [joinpage, Setjoinpage] = useState(0);

    function Prev(props) {
        return (
            <Button className="Button" variant="contained" type="button" onClick={() => {
                Setjoinpage(props.page)
                titleRef.current.scrollIntoView({ behavior: 'smooth' })
            }}>PREV</Button>
        )
    }
    function Next(props) {
        return (
            <Button
                className="Button"
                variant="contained"
                type="submit"
                disabled={props.disabled}
                onClick={() => {
                    Setjoinpage(props.page);
                    titleRef.current.scrollIntoView({ behavior: 'smooth' });
                }}>NEXT</Button>
        )
    }


    return (
        <div className="Join" ref={titleRef}>
            <Formik
                validationSchema={JoinSchema}
                initialValues={{
                    jurusan: "",
                    angkatan: "",
                    alamat: "",
                    vaksin: "",
                    nohp: "",
                    idline: "",
                    ig: "",
                    domisili: "",
                    divisi: "",
                    divisialt: "",
                    jawaban: "",
                    jawaban2: "",
                    portofolio: ""
                }}
                onSubmit={(values) => {
                    Setloading(true);
                    const login = localStorage.getItem('LoginID');
                    axios.post("http://127.0.0.1:8000/api/panitia/insertData", {
                        nim: nim,
                        name: name,
                        email: email,
                        program_studi: values.jurusan,
                        division_1: values.divisi,
                        division_2: values.divisialt,
                        phone_number: values.nohp,
                        reason: values.jawaban,
                        portofolio: values.portofolio,
                        vaccine_certificate: file,
                        id_line: values.idline,
                        instagram_account: values.ig,
                        city: values.domisili,
                    }, {
                        headers:
                            { Authorization: `Bearer ${login}` },
                    })
                        .then((res) => {
                            Setjoinpage(6);
                            console.log(res);
                            Setloading(false);
                        }
                        )
                        .catch((err) => {
                            alert("error");
                            console.log(err);
                            Setloading(false);
                        }
                        )

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                }) => (
                    <div className="join" padding={"10px"}>
                        <div className="form">
                            <form noValidate onSubmit={handleSubmit}>

                                {/* <BorderLinearProgress /> */}
                                <BorderLinearProgress variant="determinate" value={(100 / 6) * joinpage} />
                                <br />
                                {(() => {
                                    switch (joinpage) {
                                        case 0:
                                            return (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        x: -100
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 260,
                                                        damping: 20
                                                    }}

                                                >
                                                    <div className="page1">
                                                        <Sparkles>
                                                            <span className="JoinTitle">JOIN US!</span>
                                                        </Sparkles>
                                                        <Divider />
                                                        <JoinPage0 />
                                                        <Button className="Button" variant="contained" type="button" onClick={() => {
                                                            Setjoinpage(1)
                                                            titleRef.current.scrollIntoView({ behavior: 'smooth' })
                                                        }}>Let's GO</Button>
                                                    </div>
                                                </motion.div>

                                            )
                                        case 1:
                                            return (<>
                                                {/* jurusan */}
                                                <Autocomplete
                                                    options={JurusanData}
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    onBlur={handleBlur}
                                                    type="text"
                                                    value={values.jurusan}
                                                    renderInput={(params) =>
                                                        <CustomTextField
                                                            {...params}
                                                            label="Jurusan"
                                                            placeholder="Masukan Jurusan"
                                                            name="jurusan"
                                                            fullWidth
                                                        />}
                                                    isOptionEqualToValue={(option, value) =>
                                                        value === undefined || value === "" || option.id === value.id
                                                    }
                                                    onChange={(_, data) => setFieldValue("jurusan", data.label)}
                                                />
                                                <p className="error">
                                                    {errors.jurusan && touched.jurusan && errors.jurusan}
                                                </p>
                                                {/* angkatan */}
                                                <Autocomplete
                                                    options={[
                                                        { label: "2020" },
                                                        { label: "2021" },
                                                        { label: "2022" },
                                                    ]}
                                                    value={values.angkatan}
                                                    id="angkatan"
                                                    onBlur={handleBlur}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    renderInput={(params) =>
                                                        <CustomTextField
                                                            {...params}
                                                            label="Angkatan"
                                                            ref={formInput}
                                                            type="text"
                                                            name="angkatan"

                                                            fullWidth
                                                        />}
                                                    isOptionEqualToValue={(option, value) =>
                                                        value === undefined || value === "" || option.id === value.id
                                                    }
                                                    onChange={(_, data) => setFieldValue("angkatan", data.label.valueOf())}
                                                />
                                                <p className="error">
                                                    {errors.angkatan && touched.angkatan && errors.angkatan}
                                                </p>
                                                {/* alamat */}
                                                <CustomTextField
                                                    id="alamat"
                                                    ref={formInput}
                                                    value={values.alamat}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="alamat"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    label="Alamat"
                                                    placeholder="Alamat Sekarang"

                                                />
                                                <p className="error">
                                                    {errors.alamat && touched.alamat && errors.alamat}
                                                </p>
                                                {/* Kota Domisili */}
                                                <CustomTextField
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
                                                    label="Domisili"

                                                />
                                                <p className="error">
                                                    {errors.domisili && touched.domisili && errors.domisili}
                                                </p>
                                                <div justifyContent={"space-between"}>
                                                    <Prev page={0} />
                                                    <Button
                                                        className="Button"
                                                        variant="contained"
                                                        // type="submit"
                                                        disabled={!(values.jurusan && values.angkatan && values.alamat && values.domisili)}
                                                        onClick={() => {
                                                            Setjoinpage(2);
                                                            titleRef.current.scrollIntoView({ behavior: 'smooth' });
                                                        }}>NEXT</Button>
                                                </div>
                                            </>);
                                        case 2:
                                            return (<div className="page2">
                                                {/* Sudah Vaksin ke-3 */}
                                                <div>
                                                    <p className="TextLabel">
                                                        Upload Sertifikat Vaksin Covid-19 ke-3
                                                    </p>
                                                    <UploadImage file={file} setFile={setFile} />
                                                </div>
                                                <p className="error">
                                                    {errors.fullname && touched.fullname && errors.fullname}
                                                </p>
                                                {/* No Handphone */}
                                                <CustomTextField
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="nohp"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.nohp}
                                                    placeholder="E.g +628123456789"
                                                    className="form-control inp_text"
                                                    id="nohp"
                                                    label="Nomor Telepon Aktif"
                                                />
                                                <p className="error">
                                                    {errors.nohp && touched.nohp && errors.nohp}
                                                </p>
                                                {/* ID Line */}
                                                <CustomTextField
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="idline"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.idline}
                                                    placeholder="Masukan ID Line Aktif"
                                                    className="form-control inp_text"
                                                    id="idline"
                                                    label="ID Line"
                                                />
                                                <p className="error">
                                                    {errors.idline && touched.idline && errors.idline}
                                                </p>
                                                {/* Instagram */}
                                                <CustomTextField
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="ig"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.ig}
                                                    placeholder="E.g. @username"
                                                    className="form-control inp_text"
                                                    id="ig"
                                                    label="Instagram Aktif"

                                                />
                                                <p className="error">
                                                    {errors.ig && touched.ig && errors.ig}
                                                </p>

                                                {/* divisi */}
                                                <Autocomplete
                                                    options={DivisiData}
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    onBlur={handleBlur}
                                                    value={values.divisi}
                                                    id="jurusan"
                                                    renderInput={(params) =>
                                                        <CustomTextField
                                                            {...params}
                                                            label="Divisi"
                                                            type="text"
                                                            name="divisi"
                                                            placeholder="Masukan Divisi"

                                                            fullWidth
                                                        />}
                                                    isOptionEqualToValue={(option, value) =>
                                                        value === undefined || value === "" || option.id === value.id
                                                    }
                                                    onChange={(_, data) => setFieldValue("divisi", data.label)}
                                                />
                                                <p className="error">
                                                    {errors.divisi && touched.divisi && errors.divisi}
                                                </p>
                                                {/* Divisi Alternatif */}
                                                <Autocomplete
                                                    options={DivisiData}
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    onBlur={handleBlur}
                                                    type="text"
                                                    value={values.divisialt}
                                                    renderInput={(params) =>
                                                        <CustomTextField
                                                            {...params}
                                                            label="Divisi Alternatif"
                                                            placeholder="Masukan Divisi Alternatif"
                                                            name="divisialt"

                                                            fullWidth
                                                        />}
                                                    isOptionEqualToValue={(option, value) =>
                                                        value === undefined || value === "" || option.id === value.id
                                                    }
                                                    onChange={(_, data) => setFieldValue("divisialt", data.label)}
                                                />
                                                <p className="error">
                                                    {errors.divisi_alternatif && touched.divisi_alternatif && errors.divisi_alternatif}
                                                </p>
                                                <div justifyContent={"space-between"}>
                                                    <Prev page={1} />
                                                    <Next page={3}
                                                        disabled={!(values.nohp && values.idline && values.ig && values.divisi && values.divisialt)}
                                                    />
                                                </div>
                                            </div>)
                                        case 3:
                                            return (<>
                                                <p className="Wrapper">Apa yang kamu ketahui tentang U-FEST?</p>

                                                <CustomTextField
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="jawaban"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.jawaban}
                                                    label="Jawaban"
                                                    placeholder="Masukan Jawaban"
                                                    className="textarea"
                                                    id="jawaban"
                                                    multiline
                                                    rows={4}
                                                />
                                                <p className="error">
                                                    {errors.jawaban && touched.jawaban && errors.jawaban}
                                                </p>
                                                <div justifyContent={"space-between"}>
                                                    <Prev page={2} />
                                                    <Next page={4}
                                                        disabled={!(values.jawaban)}
                                                    />
                                                </div>
                                            </>);
                                        case 4:
                                            return (<>
                                                <p className="Wrapper">Berdasarkan Divisi yang kamu pilih, menurut kamu sifat apa saja yang diperlukan untuk menjadi bagian dari divisi tersebut?</p>
                                                <br />
                                                <CustomTextField
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    name="jawaban2"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.jawaban2}
                                                    className="textarea"
                                                    label="Alasan"
                                                    placeholder="Masukan Jawaban"
                                                    id="jawaban2"
                                                    multiline
                                                    rows={4}
                                                />
                                                <p className="error">
                                                    {errors.jawaban2 && touched.jawaban2 && errors.jawaban2}
                                                </p>
                                                <div justifyContent={"space-between"}>
                                                    <Prev page={3} />
                                                    <Next page={5}
                                                        disabled={!(values.jawaban && values.jawaban2)}
                                                    />
                                                </div>
                                            </>)
                                        case 5:
                                            return (<>
                                                <p className="Wrapper">Upload Portofolio</p>
                                                <CustomTextField
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    type="text"
                                                    label="Portofolio"
                                                    name="portofolio"
                                                    placeholder="E.g https://drive.google.com/drive/folders/yourfolder"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.portofolio}
                                                    className="textarea"
                                                    id="portofolio"
                                                    multiline
                                                    rows={3}
                                                />
                                                <p className="error">
                                                    {errors.portofolio && touched.portofolio && errors.portofolio}
                                                </p>
                                                <div justifyContent={"space-between"}>
                                                    <Prev page={4} />
                                                    <Button
                                                        className="button"
                                                        variant="contained"
                                                        type="submit"
                                                    >
                                                        {loading ? (<CircularProgress />) : "Submit"}
                                                    </Button>
                                                </div>
                                            </>)
                                        case 6:
                                            return (<>
                                                <Thankyou />
                                                <p className="textfillheart">
                                                    Tap to fill heart!
                                                </p>
                                            </>)
                                        default:
                                            return null;
                                    }
                                })()}

                            </form>
                        </div>
                    </div>
                )
                }
            </Formik >
        </div >

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