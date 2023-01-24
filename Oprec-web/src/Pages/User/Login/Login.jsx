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



export function Login() {
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
                                    dispatch(userRoleAdded("admin"));
                                    dispatch(userRoleAdded("admin"));
                                    dispatch(pageChanged("database"));
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
                    <Box className="form">
                        <form noValidate onSubmit={handleSubmit}>
                            {/* Title */}
                            <Text className="Title">Welcome Back!</Text>
                            {/* Sub Title */}
                            <Text className="Subtitle">Let's grow together with UFEST!</Text>
                            <Button className="Google">
                                <Image className="googleicon" src={Google} alt="Google" />
                                Sign in with Google</Button>
                            <Box className="Line" />
                            <Text className="Or">Or</Text>
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
                                required
                                sx={{
                                    color: "white",

                                }}
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
                                required
                            />
                            <p className="error">
                                {errors.password && touched.password && errors.password}
                            </p>
                            <Flex justifyContent={"space-between"} paddingInline="15px" alignItems={"center"}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                                <Link onClick={() => { dispatch(pageChanged("register")) }}>
                                    Forgot Password?
                                </Link>
                            </Flex>
                            <Button
                                className="button"
                                variant="contained"
                                type="submit"
                            >
                                {loading ?
                                    (<CircularProgress />)
                                    :
                                    "Login"
                                }
                            </Button>
                        </form>
                        <br />
                        <Text fontSize={"15px"}>
                            Belum punya akun?{' '}
                            <Link onClick={() => { dispatch(pageChanged("register")) }}>
                                Daftar Sekarang!
                            </Link>
                        </Text>
                    </Box>
                </Box>
            )}
        </Formik>

    );
}
