import { Box, Text, Link } from "@chakra-ui/react";
import "./Login.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPage } from "../../../Redux/features/page/pageSlice";
import { pageChanged } from "../../../Redux/features/page/pageSlice";
import { userLogin, userRegister } from "../../../Redux/features/users/userDataSlice";

// Creating schema
const schema = Yup.object().shape({
    fullname: Yup.string()
        .required("Full Name is a required field"),
    nim: Yup.string()
        .required("NIM is a required field")
        .min(10, "Enter a valid NIM"),
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
    repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')

});

export function Register(props) {
    // use dispatch to change page
    const dispatch = useDispatch();
    // next input when press enter
    const formInput = useRef(null);
    const EnterHandleClick = (e) => {
        if (e.key === 'Enter') {
            formInput.current.focus()
        }
    }
    const userData = useSelector((state) => state);
    return (
        <Box className="Login">
            {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
            <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "", fullname: "", nim: "", repassword: "" }}
                onSubmit={(values) => {
                    // Alert the input values of the form that we filled
                    alert(JSON.stringify(values));
                    dispatch(userRegister(
                        {
                            email: values.email,
                        }
                    ));
                    console.log(userData);
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
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                                <span>Register</span>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                                <input
                                    ref={formInput}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="text"
                                    name="fullname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fullname}
                                    placeholder="Enter Full Name"
                                    className="form-control inp_text"
                                    id="fullname"
                                />
                                <p className="error">
                                    {errors.fullname && touched.fullname && errors.fullname}
                                </p>
                                <input
                                    ref={formInput}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="text"
                                    name="nim"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nim}
                                    placeholder="NIM (000000)"
                                    className="form-control inp_text"
                                    id="nim"
                                />
                                <p className="error">
                                    {errors.nim && touched.nim && errors.nim}
                                </p>
                                <input
                                    ref={formInput}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email id / username"
                                    className="form-control inp_text"
                                    id="email"
                                />
                                {/* If validation is not passed show errors */}

                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
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
                                <input
                                    ref={formInput}
                                    onKeyDownCapture={EnterHandleClick}
                                    type="password"
                                    name="repassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.repassword}
                                    placeholder="Re-Enter password"
                                    className="form-control"
                                />
                                <p className="error">
                                    {errors.repassword && touched.repassword && errors.repassword}
                                </p>
                                {/* If validation is not passed show errors */}
                                {/* Click on submit button to submit the form */}
                                <button type="submit">Register</button>
                            </form>
                            <br />
                            <Text fontSize={"15px"}>
                                Already have account?{' '}
                                <Link color='teal.500' onClick={() => { dispatch(pageChanged('login')) }}>
                                    Login now!
                                </Link>
                            </Text>
                        </div>
                    </div>
                )}
            </Formik>
        </Box>

    );
}
