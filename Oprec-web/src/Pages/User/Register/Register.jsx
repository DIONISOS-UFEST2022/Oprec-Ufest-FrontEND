// Styling
// import { Box, Text, Link } from "@chakra-ui/react";
import "./Register.scss";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
// Form Control
import { Formik } from "formik";
import { RegisterSchema } from "./RegisterSchema";
// React
import { useState, useRef } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { pageChanged } from "../../../Redux/features/page/pageSlice";
import { userRoleAdded } from "../../../Redux/features/users/userRoleSlice";
import { userTokenAdded } from "../../../Redux/features/users/userRoleSlice";
// Axios
import axios from "axios";
// Module
import { CustomTextField } from "../../../Reusable/TextField/CustomTextField";
// animation
import { motion } from "framer-motion";
import { userDataAdded } from "../../../Redux/features/users/userRoleSlice";

export default function Register() {
    // use dispatch to change page
    const dispatch = useDispatch();
    // next input when press enter
    const [loading, Setloading] = useState(false);
    const formInput = useRef(null);
    const EnterHandleClick = (e) => {
        if (e.key === 'Enter') {
            formInput.current.focus()
        }
    }
    // const userData = useSelector((state) => state);
    return (
        <Formik
            validationSchema={RegisterSchema}
            initialValues={{ email: "", password: "", fullname: "", nim: "", repassword: "" }}
            onSubmit={(values) => {
                Setloading(true);
                axios.post('http://localhost:8000/api/register', {
                    name: values.fullname,
                    nim: values.nim,
                    password: values.password,
                    email: values.email,
                })
                    .then(function (response) {
                        if (response.data.success === true) {
                            dispatch(pageChanged("home"));
                            dispatch(userRoleAdded("user"));
                            dispatch(userDataAdded({
                                name: response.data.user.name,
                                nim: response.data.user.nim,
                                email: response.data.user.email,
                            }));
                            axios.post('http://localhost:8000/api/login', {
                                email: values.email,
                                password: values.password,
                            })
                                .then(function (response) {
                                    // console.log(response);
                                    if (response.status === 200) {
                                        localStorage.setItem('LoginID', `${response.data}`);
                                        dispatch(userTokenAdded(response.data.token));
                                    } else {
                                        console.log("Register Failed");
                                    }
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });

                        } else {
                            alert("Register Failed");
                        }
                        Setloading(false);
                    })
                    .catch(function (error) {
                        alert(error.response.data.message);
                        if (error.response.data.success === false) {
                            alert("Register Failed");
                        }
                        Setloading(false);
                    });
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
                <div id="Register">
                    <div className="form">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <form noValidate onSubmit={handleSubmit}>

                                <span className="Title">Register</span>
                                <CustomTextField
                                    id="fullname"
                                    ref={formInput}
                                    value={values.fullname}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="text"
                                    name="fullname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Nama Lengkap"
                                    placeholder="Masukan Nama Lengkap"
                                />
                                <p className="error">
                                    {errors.fullname && touched.fullname && errors.fullname}
                                </p>
                                <CustomTextField
                                    id="nim"
                                    ref={formInput}
                                    value={values.nim}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="text"
                                    name="nim"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="NIM"
                                    placeholder="E.g 00000012345"
                                />
                                <p className="error">
                                    {errors.nim && touched.nim && errors.nim}
                                </p>
                                <CustomTextField
                                    id="email"
                                    ref={formInput}
                                    value={values.email}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Email Student"
                                    placeholder="Masukan Email Student UMN"
                                />
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                                <CustomTextField
                                    id="password"
                                    ref={formInput}
                                    value={values.password}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Password"
                                    placeholder="Buat Password"
                                />
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
                                <CustomTextField
                                    id="password"
                                    ref={formInput}
                                    value={values.repassword}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="password"
                                    name="repassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Re-Enter Password"
                                    placeholder="Masukan Ulang Password"
                                />
                                <p className="error">
                                    {touched.repassword && errors.repassword}
                                </p>
                                <Button
                                    disabled={
                                        !values.fullname ||
                                        !values.nim ||
                                        !values.email ||
                                        !values.password ||
                                        !values.repassword ||
                                        errors.fullname ||
                                        errors.nim ||
                                        errors.email ||
                                        errors.password ||
                                        errors.repassword
                                    }
                                    className="button"
                                    variant="contained"
                                    type="submit"
                                    onClick={() => {
                                        handleSubmit(values);
                                    }}>
                                    {loading ? (<CircularProgress />) : "Register"}
                                </Button>

                            </form>
                            <br />
                            <p fontSize={"15px"} fontWeight="bold">
                                Already have account?{' '}
                                <a className="Purple" onClick={() => { dispatch(pageChanged('login')) }}>
                                    Login now!
                                </a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            )
            }
        </Formik >

    );
}
