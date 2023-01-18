import { Box, Text } from "@chakra-ui/react";
import { Link, CircularProgress } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import "./Login.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { Register } from "../Register/Register";
import { useSelector, useDispatch, useStore } from "react-redux";
import { selectPage } from "../../../Redux/features/page/pageSlice";
import { pageChanged } from "../../../Redux/features/page/pageSlice";
import { userRoleAdded, loginUser, loginUserFai, loginUserSuccess } from "../../../Redux/features/users/userRoleSlice";
import axios from "axios";
import useCookie from 'react-use-cookie';
import { userTokenAdded } from "../../../Redux/features/users/userRoleSlice";
import { useState } from "react";


// Creating schema
const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
});

export function Login(props) {
    const [loading, Setloading] = useState(false);
    const [error, Seterror] = useState(false);
    const dispatch = useDispatch();
    // next input when press enter
    const formInput = useRef(null);
    const EnterHandleClick = (e) => {
        if (e.key === 'Enter') {
            formInput.current.focus()
        }
    }
    // const token = useSelector(setUserToken);
    return (
        <Box className="Login">
            {error ? <Alert severity="error">Login error, email or password incorrect!</Alert> : "" }
            <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    Setloading(true);
                    axios.post("http://127.0.0.1:8000/api/login", values)
                        .then((res) => {
                            dispatch(userTokenAdded(res.data));
                            axios.get("http://127.0.0.1:8000/api/me", {
                                headers:
                                    { Authorization: `Bearer ${res.data}` }
                            })
                                .then((result) => {
                                    if (result.data.data.role_id === 1) {
                                        dispatch(userRoleAdded("admin"));
                                        dispatch(userRoleAdded("admin"));
                                        dispatch(pageChanged("database"));
                                        Setloading(false);
                                    } else if (result.data.data.role_id === 2) {
                                        dispatch(userRoleAdded("user"));
                                        dispatch(pageChanged("home"));
                                        Setloading(false);
                                    }
                                })
                                .catch((err) => {
                                    console.log(err);
                                    Seterror(true);
                                    Setloading(false);
                                })
                        }
                        )
                        .catch((err) => {
                            Seterror(true);
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
                }) => (
                    <div className="login">
                        <div className="form">
                            <form noValidate onSubmit={handleSubmit}>
                                <span>Login</span>
                                <input
                                    ref={formInput}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email"
                                    className="form-control inp_text"
                                    id="email"
                                />
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                                <input
                                    ref={formInput}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="form-control"
                                />
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
                                <button type="submit">{loading ? (<CircularProgress />) : "Login"}</button>

                            </form>
                            <br />
                            <Text fontSize={"15px"}>
                                Belum punya akun?{' '}
                                <Link onClick={() => { dispatch(pageChanged("register")) }}>
                                    Daftar Sekarang!
                                </Link>
                            </Text>
                        </div>
                    </div>
                )}
            </Formik>
        </Box>

    );
}
