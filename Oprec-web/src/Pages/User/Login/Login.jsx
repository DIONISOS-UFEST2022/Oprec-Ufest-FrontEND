// Styling
import "./Login.scss";
// Material UI
import {
    Box,
    CircularProgress,
    Button,
    TextField,
    Checkbox,
} from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Divider } from "@mui/material";
import CustomButton from "../../../Reusable/CustomComponent/CustomButton.jsx";
// import Alert from "@mui/material/Alert";
// Form Control
import { Formik } from "formik";
import { Loginschema } from "./LoginSchema";
// React
import React, { useState, useRef, useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import { pageChanged } from "../../../Redux/features/page/pageSlice";
import { userRoleAdded } from "../../../Redux/features/users/userRoleSlice";
import { userTokenAdded } from "../../../Redux/features/users/userRoleSlice";
// animation
import { m, domAnimation, LazyMotion } from "framer-motion";
// URL
import { postRequest } from "../../../Reusable/Service/AxiosClient";



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
    // state
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const [loading, Setloading] = useState(false);
    const [error, Seterror] = useState(false);
    const dispatch = useDispatch();
    const formInput = useRef(null);
    // animation


    return (
        <Formik
            validationSchema={Loginschema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
                Setloading(true);
                const userLogin = async () => {
                    try {
                        const res = await postRequest('login', values);
                        if (res.data.success === true) {
                            dispatch(userTokenAdded(res.data));
                            if (res.data.role === 1) {
                                dispatch(userRoleAdded("admin"));
                                dispatch(pageChanged("division"));
                                Setloading(false);
                            } else if (res.data.role === 2) {
                                dispatch(userRoleAdded("user"));
                                dispatch(pageChanged("home"));
                                Setloading(false);
                            }
                            localStorage.setItem('LoginID', res.data.login_token);
                            Setloading(false);
                        } else {
                            Setloading(false);
                            Seterror(true);
                        }
                    } catch (error) {
                        Setloading(false);
                        Seterror(true);
                    }
                }
                userLogin();
            }}
        >
            {({
                errors,
                touched,
                handleSubmit,
                handleChange,
            }) => (
                <div id="Login">
                    {error === true && loading === false ?
                        <>
                            <Alert severity="error" sx={{
                                margin: '10px',
                                width: '80%',
                                position: 'absolute',
                                top: '8vh',
                                zIndex: '4',
                            }}>
                                Email or Password is wrong!
                            </Alert>
                        </>
                        : ""}
                    <Box className="form" paddingX={["20px", "30px", "45px"]}>
                        <LazyMotion features={domAnimation}>
                            <m.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <form noValidate onSubmit={handleSubmit}>
                                    {/* Title */}
                                    <Box className="Title" fontSize={["35px", "40px", "45px"]}>WELCOME BACK!</Box>
                                    {/* Sub Title */}

                                    <Box className="Subtitle" fontSize={["10px", "10px", "15px"]}> Let's grow together with UFEST!</Box>
                                    <Divider className="Divider" />
                                    <TextField
                                        helperText=""
                                        id="email"
                                        name="email"
                                        label="Email Student UMN"
                                        placeholder="Enter UMN student email "
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                    <p className="error">
                                        {errors.email && touched.email && errors.email}
                                    </p>
                                    <TextField
                                        helperText=""
                                        type={"password"}
                                        id="password"
                                        name="password"
                                        label="Password"
                                        placeholder="Enter your password"
                                        className="form-control"
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                    <p className="error">
                                        {errors.password && touched.password && errors.password}
                                    </p>

                                    <div className="center">
                                        <CustomButton
                                            type="submit"
                                            disabled={!(errors.email === undefined && errors.password === undefined) || (loading === true)}

                                        >
                                            {loading ? (<CircularProgress
                                                color="green"
                                                size={24}
                                                sx={{
                                                    width: '10px',
                                                }}
                                            />) : "Login"}
                                        </CustomButton>
                                    </div>
                                </form>
                                <div className="center">
                                    <p
                                        className="ForgotPass"
                                        onClick={() => { dispatch(pageChanged("register")) }}>
                                        Forgot Password?
                                    </p>
                                </div>
                                <Box className="center bold" fontSize={["13px", "14px", "15px"]}>
                                    Don't have account?&nbsp;
                                    <p className="purple underline" onClick={() => { dispatch(pageChanged("register")) }}>
                                        Register Now!
                                    </p>
                                </Box>
                            </m.div>
                        </LazyMotion>
                    </Box>
                </div>
            )
            }
        </Formik >
    );
}
