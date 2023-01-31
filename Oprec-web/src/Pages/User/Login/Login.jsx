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
import FormControlLabel from '@mui/material/FormControlLabel';
import { Divider } from "@mui/material";
import Alert from "@mui/material/Alert";
// Form Control
import { Formik } from "formik";
import { Loginschema } from "./LoginSchema";
// React
import { useState, useRef, useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import { pageChanged } from "../../../Redux/features/page/pageSlice";
import { userRoleAdded } from "../../../Redux/features/users/userRoleSlice";
import { userTokenAdded } from "../../../Redux/features/users/userRoleSlice";
// axios
import axios from "axios";
// Asset
import Google from "./../../../Asset/OtherLogo/google.png";
// animation
import { m, domAnimation, LazyMotion } from "framer-motion";
// URL
// import { URL } from "../../../Reusable/Service/URL";
import { postRequest } from "../../../Reusable/Service/AxiosClient";

export default function Login() {
    // state
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const [loading, Setloading] = useState(false);
    const [error, Seterror] = useState(false);
    const dispatch = useDispatch();
    const formInput = useRef(null);
    const EnterHandleClick = (e) => {
        if (e.key === 'Enter') {
            formInput.current.focus()
        }
    }
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
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <div id="Login">
                    {error ? <Alert severity="error">Login error, email or password incorrect!</Alert> : ""}
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
                                    <Divider />
                                    <Box className="Subtitle" fontSize={["10px", "10px", "15px"]}> Let's grow together with UFEST!</Box>
                                    <Button className="Google">
                                        <img className="googleicon" src={Google} alt="Google" />
                                        Sign in with Google
                                    </Button>
                                    <Divider className="Divider">or</Divider>
                                    <TextField
                                        helperText=""
                                        id="email"
                                        name="email"
                                        label="Email Student UMN"
                                        placeholder="Masukan email student UMN"
                                        className="form-control inp_text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        onKeyDown={EnterHandleClick}
                                        // ref={formInput}
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
                                        label="Enter your password"
                                        placeholder="Masukan password"
                                        className="form-control"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        onKeyDown={EnterHandleClick}
                                        // ref={formInput}
                                        fullWidth
                                    />
                                    <p className="error">
                                        {errors.password && touched.password && errors.password}
                                    </p>
                                    <div
                                        className="Checkbox-Section"
                                    >
                                        <FormControlLabel
                                            className="RememberMe"
                                            control={<Checkbox defaultChecked />} label="Remember Me" />
                                        <p
                                            className="ForgotPass"
                                            onClick={() => { dispatch(pageChanged("register")) }}>
                                            Forgot Password?
                                        </p>
                                    </div>
                                    <Button
                                        className="button"
                                        variant="contained"
                                        type="submit"
                                    >
                                        {loading ? (<CircularProgress />) : "Login"}
                                    </Button>
                                </form>
                                <br />
                                <Box fontSize={["13px", "14px", "15px"]}>
                                    Belum punya akun?{' '}
                                    <p onClick={() => { dispatch(pageChanged("register")) }}>
                                        Daftar Sekarang!
                                    </p>
                                </Box>
                            </m.div>
                        </LazyMotion>
                    </Box>
                </div>
            )}
        </Formik>
    );
}
