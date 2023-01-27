// Styling
import "./Login.scss";
// Material UI
import { Link, CircularProgress, Button } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import { Box } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";
import { TextField } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
import { Divider } from "@mui/material";
// Form Control
import { Formik } from "formik";
import { Loginschema } from "./LoginSchema";
// React
import { useState, useRef } from "react";
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


export default function Login() {
    // theme
    // state
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
    // animation
    return (
        <Formik
            validationSchema={Loginschema}
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
                                    console.log(result.data.data);
                                    dispatch(userRoleAdded("admin"));
                                    dispatch(userRoleAdded("admin"));
                                    dispatch(pageChanged("division"));
                                    Setloading(false);
                                } else if (result.data.data.role_id === 2) {
                                    dispatch(userRoleAdded("user"));
                                    dispatch(pageChanged("home"));
                                    Setloading(false);
                                }
                                localStorage.setItem('LoginID', `${res.data}`);
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
                <Box id="Login">
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
                                        <image className="googleicon" src={Google} alt="Google" />
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
                                        ref={formInput}
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
                                        ref={formInput}
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
                                        <Link
                                            className="ForgotPass"
                                            onClick={() => { dispatch(pageChanged("register")) }}>
                                            Forgot Password?
                                        </Link>
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
                                    <Link onClick={() => { dispatch(pageChanged("register")) }}>
                                        Daftar Sekarang!
                                    </Link>
                                </Box>
                            </m.div>
                        </LazyMotion>
                    </Box>
                </Box>
            )}
        </Formik>
    );
}
