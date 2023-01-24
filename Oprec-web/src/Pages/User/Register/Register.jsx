// Styling
import { Box, Text, Link } from "@chakra-ui/react";
import "./Register.scss";
import { Button } from "@material-ui/core";
// Form Control
import { Formik } from "formik";
import { RegisterSchema } from "./RegisterSchema";
// React
import { useRef } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { pageChanged } from "../../../Redux/features/page/pageSlice";
import { userRoleAdded } from "../../../Redux/features/users/userRoleSlice";
// Axios
import axios from "axios";
// Module
import { CustomTextField } from "../../../Reusable/TextField/CustomTextField";



export function Register() {
    // use dispatch to change page
    const dispatch = useDispatch();
    // next input when press enter
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
                axios.post('http://localhost:8000/api/register', {
                    name: values.fullname,
                    nim: values.nim,
                    password: values.password,
                    email: values.email,
                })
                    .then(function (response) {
                        if (response.data.success === true) {
                            alert("Register Success");
                            dispatch(pageChanged("home"));
                            dispatch(userRoleAdded("user"));
                        }
                        console.log(response);
                    })
                    .catch(function (error) {
                        alert(error.response.data.message);
                        if (error.response.data.success === false) {
                            alert("Register Failed");
                        }
                    });
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
                <div id="Register">
                    <div className="form">
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
                                {errors.repassword && touched.repassword && errors.repassword}
                            </p>
                            <Button
                                className="button"
                                variant="contained"
                                type="submit"
                                onClick={() => {
                                }}>Register</Button>
                        </form>
                        <br />
                        <Text fontSize={"15px"} fontWeight="bold">
                            Already have account?{' '}
                            <Link className="Purple" onClick={() => { dispatch(pageChanged('login')) }}>
                                Login now!
                            </Link>
                        </Text>
                    </div>
                </div>
            )}
        </Formik>

    );
}
