import React from 'react'
import axios from 'axios'
import {Form, Field, withFormik} from 'formik'

const OnboardingForm = () => {

    return (
        <div className="onboarding-form">
            <h1>User Onboarding Form</h1>
            <Form>
                <Field type="text" name="name" placeholder="Your Name" />
                <Field type="text" name="email" placeholder="Your Email" />
                <Field type="text" name="password" placeholder="Your Password" />
                <button>Submit</button>
            </Form>
        </div>
    )
}


const FormikOnboarding = withFormik()(OnboardingForm)

export default FormikOnboarding;