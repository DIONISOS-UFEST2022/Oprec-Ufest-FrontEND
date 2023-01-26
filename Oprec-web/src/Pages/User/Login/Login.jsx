// Styling
import { Text, Image, Flex } from "@chakra-ui/react";
import { Link, CircularProgress, Button, Grid } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import { Box } from "@mui/system";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./Login.scss";
import TextField from '@mui/material/TextField';
import { Divider } from "@mui/material";
import { extendTheme } from "@chakra-ui/react";
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
import { motion } from "framer-motion";


export function Login() {
    // theme
    const customeTheme = extendTheme({
        colors: {},
        fonts: {},
        fontSizes: {},
        breakpoints: {
            sm: "320px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
    });
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
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <form noValidate onSubmit={handleSubmit}>
                                {/* Title */}
                                <Box className="Title" fontSize={["25px", "35px", "40px"]}>Welcome Back!</Box>
                                {/* Sub Title */}
                                <Divider />
                                <Box className="Subtitle" fontSize={["10px", "10px", "15px"]}> Let's grow together with UFEST!</Box>
                                <Button className="Google">
                                    <Image className="googleicon" src={Google} alt="Google" />
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
                                <Flex marginTop={"20px"} marginBottom="10px" justifyContent={"space-between"} paddingInline="10px" alignItems={"center"}>
                                    <FormControlLabel
                                        className="RememberMe"
                                        control={<Checkbox defaultChecked />} label="Remember Me" />
                                    <Link
                                        className="ForgotPass"
                                        onClick={() => { dispatch(pageChanged("register")) }}>
                                        Forgot Password?
                                    </Link>
                                </Flex>
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
                        </motion.div>
                    </Box>
                </Box>
            )}
        </Formik>
    );
}
