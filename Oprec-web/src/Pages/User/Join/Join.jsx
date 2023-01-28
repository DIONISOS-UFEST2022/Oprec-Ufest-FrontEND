// Styling
import "./Join.scss";
// Material UI Material
import { Autocomplete, Divider } from "../../../Reusable/MaterialUICoreLazy/MaterialUIMaterialLazy";
// Material UI Core
import { Button, CircularProgress, Grid } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
// Form Control
import { Formik } from "formik";
// React
import { Suspense, lazy, useRef, useState } from "react";
// Module
import Thankyou from "./Thankyou/Thankyou";
import { DivisiData, JurusanData } from "./AutoComplete/AutoComplete";
import { JoinSchema } from "./JoinSchema";
import { CustomTextField } from "../../../Reusable/TextField/CustomTextField";
// import { UploadImage } from "./UploadImage/UploadImage";
import { m, domAnimation, LazyMotion } from "framer-motion";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectuserName, selectuserEmail, selectuserNim } from "../../../Redux/features/users/userRoleSlice";
// import { useEffect } from "react";
// Styling
import { FileUploader } from "react-drag-drop-files";
import "./UploadImage/UploadImage.scss"

const fileTypes = [
    "JPEG",
    "JPG",
    "PNG",
    "IMG",
];


const JoinPage0 = lazy(() => import("./Page/JoinPage0"));
const Sparkles = lazy(() => import("../../../Reusable/Animation/Sparkle/Sparkle"));
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

    // const [file, setFile] = useState(null);
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
                        division_1: values.divisialt,
                        division_2: values.divisi,
                        phone_number: values.nohp,
                        reason_1: values.jawaban,
                        reason_2: values.jawaban2,
                        portofolio: values.portofolio,
                        vaccine_certificate: values.vaksin,
                        id_line: values.idline,
                        instagram_account: values.ig,
                        city: values.domisili,
                    }, {
                        headers:
                            { Authorization: `Bearer ${login}`, 'Content-Type': 'multipart/form-data' },
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
                                <BorderLinearProgress variant="determinate" value={(100 / 6) * joinpage} />
                                <br />
                                {(() => {
                                    switch (joinpage) {
                                        case 0:
                                            return (
                                                <Suspense fallback={<div>Loading...</div>}>
                                                    <LazyMotion features={domAnimation}>
                                                        <m.div
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
                                                        </m.div>
                                                    </LazyMotion>
                                                </Suspense>
                                            )
                                        case 1:
                                            return (<>
                                                {/* jurusan */}
                                                <Autocomplete
                                                    options={JurusanData}
                                                    // ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    onBlur={handleBlur}
                                                    type="text"
                                                    value={values.jurusan}
                                                    renderInput={(params) =>
                                                        <Suspense fallback={<div>Loading...</div>}>
                                                            <CustomTextField
                                                                {...params}
                                                                label="Jurusan"
                                                                placeholder="Masukan Jurusan"
                                                                name="jurusan"
                                                                fullWidth
                                                            /></Suspense>}
                                                    isOptionEqualToValue={(option, value) =>
                                                        value === undefined || value === "" || option.id === value.id
                                                    }
                                                    onChange={(_, data) => setFieldValue("jurusan", data.label)}
                                                />
                                                <p className="error">
                                                    {errors.jurusan && touched.jurusan && errors.jurusan}
                                                </p>
                                                {/* angkatan */}
                                                <Suspense fallback={<div>Loading...</div>}>
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
                                                            <Suspense fallback={<div>Loading...</div>}>
                                                                <CustomTextField
                                                                    {...params}
                                                                    label="Angkatan"
                                                                    // ref={formInput}
                                                                    type="text"
                                                                    name="angkatan"

                                                                    fullWidth
                                                                />
                                                            </Suspense>

                                                        }
                                                        isOptionEqualToValue={(option, value) =>
                                                            value === undefined || value === "" || option.id === value.id
                                                        }
                                                        onChange={(_, data) => setFieldValue("angkatan", data.label.valueOf())}
                                                    />
                                                </Suspense>
                                                <p className="error">
                                                    {errors.angkatan && touched.angkatan && errors.angkatan}
                                                </p>
                                                {/* alamat */}
                                                <Suspense fallback={<div>Loading...</div>}>
                                                    <CustomTextField
                                                        id="alamat"
                                                        // ref={formInput}
                                                        value={values.alamat}
                                                        onKeyDownCapture={EnterHandleClick}
                                                        type="text"
                                                        name="alamat"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        label="Alamat"
                                                        placeholder="Alamat Sekarang"

                                                    />
                                                </Suspense>
                                                <p className="error">
                                                    {errors.alamat && touched.alamat && errors.alamat}
                                                </p>
                                                {/* Kota Domisili */}
                                                <Suspense fallback={<div>Loading...</div>}>
                                                    <CustomTextField
                                                        // ref={formInput}
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
                                                    <div className="Button-Bottom">
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
                                                </Suspense>
                                            </>);
                                        case 2:
                                            return (
                                                <div className="page2">
                                                    {/* Sudah Vaksin ke-3 */}
                                                    <div>
                                                        <p className="TextLabel">
                                                            Upload Sertifikat Vaksin Covid-19 ke-3
                                                        </p>

                                                        <FileUploader
                                                            child
                                                            handleChange={(file) => setFieldValue("vaksin", file)}
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
                                                            >{values.vaksin ?
                                                                <>
                                                                    <img className="img" loading="lazy" src={URL.createObjectURL(values.vaksin)} />
                                                                    <p className="caption" >{values.vaksin.name}</p>
                                                                </>
                                                                :
                                                                <>
                                                                    <img className="Img-Placeholder" loading="lazy" src="https://img.icons8.com/fluency/48/null/image.png" />
                                                                    <p>Drop your image here, or browse</p>
                                                                    <p className="support" fontStyle={"italic"} fontWeight="hairline">No file Uploaded yet</p>
                                                                </>
                                                                }
                                                            </div>
                                                        </FileUploader>
                                                    </div>
                                                    <p className="error">
                                                        {errors.vaksin && touched.vaksin && errors.vaksin}
                                                    </p>
                                                    {/* No Handphone */}
                                                    <CustomTextField
                                                        // ref={formInput}
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
                                                        // ref={formInput}
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

                                                        onKeyDownCapture={EnterHandleClick}
                                                        type="text"
                                                        name="ig"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.ig}
                                                        placeholder="E.g. https://www.instagram.com/username"
                                                        className="form-control inp_text"
                                                        id="ig"
                                                        label="Link Instagram Aktif"

                                                    />
                                                    <p className="error">
                                                        {errors.ig && touched.ig && errors.ig}
                                                    </p>

                                                    {/* divisi */}
                                                    <Autocomplete
                                                        options={DivisiData}
                                                        // ref={formInput}
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
                                                        // ref={formInput}
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
                                                        {errors.divisialt && touched.divisialt && errors.divisialt}
                                                    </p>

                                                    <div className="Button-Bottom">
                                                        <Prev page={1} />
                                                        <Next page={
                                                            values.divisi === "Visual" ? 3 : 4
                                                        }
                                                            disabled={!(values.nohp && values.idline && values.ig && values.divisi && values.divisialt && values.vaksin)}
                                                        />
                                                    </div>
                                                </div>)
                                        case 3:
                                            return (<>
                                                <p className="Wrapper">Upload Portofolio</p>
                                                <CustomTextField
                                                    // ref={formInput}
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
                                                <div className="Button-Bottom">
                                                    <Prev page={2} />
                                                    <Next page={4} />
                                                </div>
                                            </>)
                                        case 4:
                                            return (<>
                                                <p className="Wrapper">Apa yang kamu ketahui tentang U-FEST?</p>
                                                <CustomTextField
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
                                                <div className="Button-Bottom">
                                                    <Prev page={
                                                        values.divisi === "Visual" ? 3 : 2
                                                    } />
                                                    <Next page={5}
                                                        disabled={!(values.jawaban)}
                                                    />
                                                </div>
                                            </>);
                                        case 5:
                                            return (<>
                                                <p className="Wrapper">Berdasarkan Divisi yang kamu pilih, menurut kamu sifat apa saja yang diperlukan untuk menjadi bagian dari divisi tersebut?</p>
                                                <br />
                                                <CustomTextField
                                                    // ref={formInput}
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
                                                <div className="Button-Bottom">
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