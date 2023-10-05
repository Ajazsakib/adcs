
import Link from 'next/link'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useRouter } from 'next/router';

// Yup schema to validate the form
const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(7),
});



const Index = () => {

  const router = useRouter()
  const handleSubmit = async (formValues)=>{
    console.log(formValues)
    try {
      const res = await axios.post("http://localhost:3000/api/v1/user/register", formValues)

      // console.log(res,">>>>>>>>>>>>>>")
  
      if(res.data.status == 200) {
        alert("Successfully Registered")
        router.push("/login")
      }
  
     
    } catch(error) {
      console.log(error.response.data.message,">>>>>>>>>>>>>>")
      alert(error.response.data.message)
    }
   
  }

  return (
    <div className='form-wrap'>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className='form-box'>
          <h3>Register</h3>
          <div className='form-group'>
            <label>Name</label>
            <Field type="text" name='name' className="form-control" placeholder="Enter Name" />
            <ErrorMessage name="name" component="span" />
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <Field type="text" name='phoneNumber' className="form-control" placeholder="Enter Phone No" />
            <ErrorMessage name="phoneNumber" component="span" />
          </div>
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
            <button className='btn btn-appointment' type='submit'>Register</button>
          </div>
          <Link href="/login" className='form-link'>Login</Link>
        </Form>
      </Formik>
    </div>
  )
}

export default Index;
