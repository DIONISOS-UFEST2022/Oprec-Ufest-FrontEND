// Styling
import "./Register.scss";
import { Button, CircularProgress } from "../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy";
// Form Control
import { Formik } from "formik";
import { RegisterSchema } from "./RegisterSchema";
// React
import { useState, useRef } from "react";
// Redux
import { useDispatch } from "react-redux";
import { pageChanged } from "../../../Redux/features/page/pageSlice";
import { userRoleAdded } from "../../../Redux/features/users/userRoleSlice";
import { userTokenAdded } from "../../../Redux/features/users/userRoleSlice";
// Axios
// Module
import { CustomTextField } from "../../../Reusable/TextField/CustomTextField";
// animation
import { motion } from "framer-motion";
import { userDataAdded } from "../../../Redux/features/users/userRoleSlice";
// URL
import { URL } from "../../../Reusable/Service/URL";
import { postRequest } from "../../../Reusable/Service/AxiosClient";
import CustomButton from "../../../Reusable/CustomComponent/CustomButton";

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
                async function Register() {
                    try {
                        const response = await postRequest('register', {
                            name: values.fullname,
                            nim: values.nim,
                            password: values.password,
                            email: values.email,
                        });
                        console.log(response);
                        if (response.data.success === true) {
                            localStorage.setItem('LoginID', response.data.login_token);
                            dispatch(userTokenAdded(response.data.token));
                            dispatch(pageChanged("home"));
                            dispatch(userRoleAdded("user"));
                            dispatch(userDataAdded({
                                name: response.data.user.name,
                                nim: response.data.user.nim,
                                email: response.data.user.email,
                            }));
                            Setloading(false);
                        } else {
                            console.log(response);
                            Setloading(false);
                        }
                    } catch (error) {
                        console.log(error);
                        Setloading(false);
                    }
                }
                Register();
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
                                    // ref={formInput}
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
                                    // ref={formInput}
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
                                    // ref={formInput}
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
                                    // ref={formInput}
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
                                    id="repassword"
                                    // ref={formInput}
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
                                <div className="center">
                                    <CustomButton
                                        disabled={(errors.fullname || errors.nim || errors.email || errors.password || errors.repassword) ? true : false}
                                        type="submit"
                                        onClick={() => {
                                            handleSubmit(values);
                                        }}>
                                        {loading ? (<CircularProgress />) : "Register"}
                                    </CustomButton>
                                </div>
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
