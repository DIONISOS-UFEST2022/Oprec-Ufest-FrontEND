// Styling
import {
    Box, Text,
    Textarea,
    Radio,
    RadioGroup,
    Stack,
    Flex,
    Image
} from "@chakra-ui/react";
import "./Join.scss";
import { Autocomplete } from "@mui/material";
import { Button } from "@material-ui/core";
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
            <Button className="Button" variant="contained" type="button" onClick={() => {
                Setjoinpage(props.page);
                titleRef.current.scrollIntoView({ behavior: 'smooth' });
            }}>NEXT</Button>
        )
    }


    return (
        <Box className="Join" ref={titleRef}>
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
                    setFieldValue,
                }) => (
                    <Box className="join" padding={"10px"}>
                        <div className="form">
                            <form noValidate onSubmit={handleSubmit}>

                                {/* <BorderLinearProgress /> */}
                                <BorderLinearProgress variant="determinate" value={(100 / 6) * joinpage} />
                                <br />
                                {(() => {
                                    switch (joinpage) {
                                        case 0:
                                            return (<Box className="page1">
                                                <span className="JoinTitle">JOIN US!</span>
                                                <JoinPage0 />
                                                <Button className="Button" variant="contained" type="button" onClick={() => {
                                                    Setjoinpage(1)
                                                    titleRef.current.scrollIntoView({ behavior: 'smooth' })
                                                }}>Let's GO</Button>
                                            </Box>)
                                        case 1:
                                            return (<>
                                                {/* jurusan */}
                                                <Autocomplete
                                                    options={JurusanData}
                                                    // getOptionLabel={(option) => option.label ? option.label : ""}
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    onBlur={handleBlur}
                                                    type="text"
                                                    value={values.jurusan}
                                                    renderInput={(params) =>
                                                        <CustomTextField
                                                            {...params}
                                                            label="Jurusan"
                                                            // ref={formInput}
                                                            placeholder="Masukan Jurusan"
                                                            name="jurusan"
                                                            required
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
                                                    // getOptionLabel={(option) => option.label ? option.label : ""}
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
                                                            required
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
                                                    required
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
                                                    required
                                                />
                                                <p className="error">
                                                    {errors.domisili && touched.domisili && errors.domisili}
                                                </p>
                                                <Flex justifyContent={"space-between"}>
                                                    <Prev page={0} />
                                                    <Next page={2} values={values} />
                                                </Flex>
                                            </>);
                                        case 2:
                                            return (<Box className="page2">
                                                {/* Sudah Vaksin ke-3 */}
                                                <Box>
                                                    <Text className="TextLabel">
                                                        Upload Sertifikat Vaksin Covid-19 ke-3
                                                    </Text>
                                                    <UploadImage onChange={handleChange} name={"vaksin"} />
                                                </Box>
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
                                                    required
                                                />
                                                <p className="error">
                                                    {errors.ig && touched.ig && errors.ig}
                                                </p>

                                                {/* divisi */}
                                                <Autocomplete
                                                    options={DivisiData}
                                                    ref={formInput}
                                                    onKeyDownCapture={EnterHandleClick}
                                                    // getOptionLabel={(option) => option.label ? option.label : ""}
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
                                                            required
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
                                                            required
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
                                                <Flex justifyContent={"space-between"}>
                                                    <Prev page={1} />
                                                    <Next page={3} />
                                                </Flex>
                                            </Box>)
                                        case 3:
                                            return (<>
                                                <Text className="Wrapper">Apa yang kamu ketahui tentang U-FEST?</Text>

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
                                                <Flex justifyContent={"space-between"}>
                                                    <Prev page={2} />
                                                    <Next page={4} />
                                                </Flex>
                                            </>);
                                        case 4:
                                            return (<>
                                                <Text className="Wrapper">Berdasarkan Divisi yang kamu pilih, menurut kamu sifat apa saja yang diperlukan untuk menjadi bagian dari divisi tersebut?</Text>
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
                                                <Flex justifyContent={"space-between"}>
                                                    <Prev page={3} />
                                                    <Next page={5} />
                                                </Flex>
                                            </>)
                                        case 5:
                                            return (<>
                                                <Text className="Wrapper">Upload Portofolio</Text>
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
                                                <Flex justifyContent={"space-between"}>
                                                    <Prev page={4} />
                                                    <Button className="Button" variant="contained" type="submit" onClick={() => {
                                                        Setjoinpage(6);
                                                        titleRef.current.scrollIntoView({ behavior: 'smooth' });
                                                        console.log(values);
                                                    }}>Submit</Button>
                                                </Flex>
                                            </>)
                                        case 6:
                                            return (<>
                                                <Thankyou />
                                                <Text className="textfillheart">
                                                    Tap to fill heart!
                                                </Text>
                                            </>)
                                        default:
                                            return null;
                                    }
                                })()}

                            </form>
                        </div>
                    </Box>
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