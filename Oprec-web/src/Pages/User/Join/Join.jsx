// Styling
import "./Join.scss";
// Material UI Material
import { Autocomplete, Divider } from "../../../Reusable/MaterialUICoreLazy/MaterialUIMaterialLazy";
// Material UI Core
import { Button, CircularProgress, Grid } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { CustomTextField } from "../../../Reusable/TextField/CustomTextField";
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
import { m, domAnimation, LazyMotion } from "framer-motion";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { userSetJoin } from "../../../Redux/features/users/userDataSlice";
import { selectuserName, selectuserEmail, selectuserNim } from "../../../Redux/features/users/userRoleSlice";
import { selectUser } from "../../../Redux/features/users/userDataSlice";
import { useEffect } from "react";
// Styling
import { FileUploader } from "react-drag-drop-files";
import "./UploadImage/UploadImage.scss"
// URL
import { postRequest } from "../../../Reusable/Service/AxiosClient";
import CustomButton from "../../../Reusable/CustomComponent/CustomButton";
import { setCookie } from 'react-use-cookie';
const JoinPage0 = lazy(() => import("./Page/JoinPage0"));
const Sparkles = lazy(() => import("../../../Reusable/Animation/Sparkle/Sparkle"));


const fileTypes = [
    "JPEG",
    "JPG",
    "PNG",
    "IMG",
];



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




export default function Join() {
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
    const dispatch = useDispatch();
    const joinned = useSelector(selectUser).isJoin;
    const [joinpage, Setjoinpage] = useState(0);
    useEffect(() => {
        setCookie('join', 'join', { path: '/' });
        window.scrollTo(0, 0);
        if (joinned === true) {
            Setjoinpage(6)
        }
    }, [joinpage])
    function Prev(props) {
        return (
            <CustomButton
                type="button"
                onClick={() => {
                    Setjoinpage(props.page)
                }}>PREV</CustomButton>
        )
    }
    function Next(props) {
        return (
            <CustomButton
                type="button"
                disabled={props.disabled}
                onClick={() => {
                    Setjoinpage(props.page);
                }}>NEXT</CustomButton>
        )
    }


    return (
        <div>
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
                    async function postData() {
                        try {
                            const response = await postRequest(`panitia/insertData`, {
                                nim: nim,
                                name: name,
                                email: email,
                                angkatan: values.angkatan,
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
                            })
                            console.log(response);
                            if (response.status === 201) {
                                dispatch(userSetJoin());
                                Setjoinpage(6);
                                Setloading(false);
                            } else {
                                Setloading(false);
                            }
                            console.log(response)
                        } catch (error) {
                            console.log(error);
                            Setloading(false);
                        }
                    }
                    postData();
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
                                <Suspense fallback="">
                                    <BorderLinearProgress variant="determinate" value={(100 / 6) * joinpage} />
                                </Suspense>
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
                                                                <div className="center">
                                                                    <CustomButton type="button" onClick={() => {
                                                                        Setjoinpage(1)
                                                                        titleRef.current.scrollIntoView({ behavior: 'smooth' })
                                                                    }}>Let's GO</CustomButton>
                                                                </div>
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
                                                    <div className="space-between">
                                                        <Prev page={0} />
                                                        <CustomButton
                                                            disabled={!(values.jurusan && values.angkatan && values.alamat && values.domisili)}
                                                            onClick={() => {
                                                                Setjoinpage(2);
                                                                titleRef.current.scrollIntoView({ behavior: 'smooth' });
                                                            }}>NEXT</CustomButton>
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

                                                    <div className="space-between">
                                                        <Prev page={1} />
                                                        <Next page={
                                                            values.divisi === "Visual" ||
                                                                values.divisi === "Dokumentasi" ||
                                                                values.divisialt === "Dokumentasi" ||
                                                                values.divisialt === "Visual" ? 3 : 4
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
                                                    minRows={3}
                                                // rows={3}
                                                />
                                                <p className="error">
                                                    {errors.portofolio && touched.portofolio && errors.portofolio}
                                                </p>
                                                <div className="space-between">
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
                                                    minRows={4}
                                                // rows={4}
                                                />
                                                <p className="error">
                                                    {errors.jawaban && touched.jawaban && errors.jawaban}
                                                </p>
                                                <div className="space-between">
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
                                                    minRows={4}
                                                // rows={4}
                                                />
                                                <p className="error">
                                                    {errors.jawaban2 && touched.jawaban2 && errors.jawaban2}
                                                </p>
                                                <div className="space-between">
                                                    <Prev page={4} />
                                                    <CustomButton
                                                        variant="contained"
                                                        type="submit"
                                                    >
                                                        {loading ? (<CircularProgress />) : "Submit"}
                                                    </CustomButton>
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