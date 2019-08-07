import React from 'react'
import axios from 'axios'
import {Form, Field, withFormik, yupToFormErrors, ErrorMessage} from 'formik'
import * as Yup from "yup";

const OnboardingForm = ({touched, errors}) => {

    return (
        <div className="onboarding-form">
            <h1>User Onboarding Form</h1>
            <Form>
                <Field type="text" name="name" placeholder="Your Name" />
                {touched.name && errors.name && <p className="error">{errors.name}</p>}

                <Field type="text" name="email" placeholder="Your Email" />
                {touched.email && errors.email && <p className="error">{errors.email}</p>}

                <Field type="text" name="password" placeholder="Your Password" />
                {touched.password && errors.password && <p className="error">{errors.password}</p>}

                <button>Submit</button>
            </Form>
        </div>
    )
}


const FormikOnboarding = withFormik({
    mapPropsToValues(values){
        return {
            name: values.name || '',
            email: values.email || '',
            password: values.password || ''
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required'),
        password: Yup.string().min(8).required('Password has to contain at least 8 letters')
    }),

    handleSubmit(values){
        console.log('submit', values)
    }
})(OnboardingForm)

export default FormikOnboarding;