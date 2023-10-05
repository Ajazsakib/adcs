import Link from 'next/link'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useRouter } from 'next/router';
import { setCookie } from 'cookie';
// Yup schema to validate the form
const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(7),
});

const Index = () => {

  const router = useRouter()

  const handleSubmit = async (formValues)=>{
    console.log(formValues)
    try {
      const res = await axios.post("http://localhost:3000/api/v1/user/login", formValues)
      console.log(res.data.token)
      console.log(res.data.data.name)
      if(res.status == 200 && res.data.token) {
        alert("Successfully Login")
       
        router.push("/")
      }

    } catch(error){
      console.log(error)
      alert("email or password is wrong")
    }
  }

  return (
    <div className='form-wrap'>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className='form-box'>
          <h3>Login</h3>
          <div className='form-group'>
            <label>Email</label>
            <Field type="text" name='email' className="form-control" placeholder="Enter Email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <Field type="password" name='password' className="form-control" placeholder="Enter Password" />
            <ErrorMessage name="password" component="span" />
          </div>
          <div className='form-group'>
            <button className='btn btn-appointment' type='submit'>Login</button>
          </div>
          <Link href="/register" className='form-link'>Register</Link>
        </Form>
      </Formik>
    </div>
  )
}

export default Index;
