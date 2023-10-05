"use-client"
import Link from 'next/link';
import React, {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  date: '',
  time: '',
  pets: '',
  doctor: '',
  email: '',
  name: '',
  phoneNumber: '',
};


const validationSchema = Yup.object().shape({
  date: Yup.date().required('Date is required'),
  time: Yup.string().required('Time is required'),
  pets: Yup.string().required('Please select a department'),
  doctor: Yup.string().required('Please select a doctor'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  name: Yup.string().required('Full Name is required'),
  phoneNumber: Yup.number().required('Phone Number is required'),
});

const AppointmentForm = () => {

  const [startDate, setStartDate] = useState(new Date());

  const [state, setState] = useState({
    department: "",
    doctor: "",
    email: "",
    date: "",
    name: "",
    time: "",
    phoneNumber: "",
  })

  const router = useRouter();

 



  const handleSubmit = async (values) => {
    console.log(values)
    
   
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/appointment/appointment-form",
        state
      );
  
      // Handle the successful response here

      if(response.status) {
        router.push("/confirm-appointment")
      }

      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  return (
    <div>
     <section className="appoinment section">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
          <div className="mt-3">
            <div className="feature-icon mb-3">
              <i className="icofont-support text-lg"></i>
            </div>
             <span className="h3">Call for an Emergency Service!</span>
              <h2 className="text-color mt-3">+84 789 1256 </h2>
          </div>
      </div>

      <div className="col-lg-8">
           <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
            <h2 className="mb-2 title-color">Book an appoinment</h2>
            <p className="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
            <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form id="#" className="appoinment-form" method="post" action="#">
      <div className="row">
          <div className='col-lg-6'>
          <div className="form-group">
            <Field
              type="date"
              name="date"
              id="date"
              className="form-control"
              placeholder="Select Date"
            />
            <ErrorMessage name="date" component="div" className="error" />
          </div>
          </div>
          <div className='col-lg-6'>
          <div className="form-group">
          <Field
                as="select"
                name="time"
                id="time"
                className="form-control"
                placeholder="Choose Time"
              >
               <option value="" label="Select Time" />
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              </Field>
            <ErrorMessage name="time" component="div" className="error" />
          </div>
          </div>
          <div className='col-lg-6'>
            <div className="form-group">
              <Field
                as="select"
                name="pets"
                id="pets"
                className="form-control"
                placeholder="Choose Pets"
              >
               <option value="" label="Select an option" />
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              </Field>
              <ErrorMessage name="pets" component="div" className="error" />
            </div>
          </div>
          <div className='col-lg-6'>
          <div className="form-group">
            <Field
              as="select"
              name="doctor"
              id="doctor"
              className="form-control"
              placeholder="Choose Doctor"
            >
           <option value="" label="Select an option" />
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              </Field>
            <ErrorMessage name="doctor" component="div" className="error" />
          </div>
          </div>
          <div className='col-lg-6'>
          <div className="form-group">
            <Field
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter Email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          </div>

          <div className='col-lg-6'>
          <div className="form-group">
            <Field
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Enter Name"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          </div>

          <div className='col-lg-6'>
          <div className="form-group">
            <Field
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              className="form-control"
              placeholder="Enter Phone Number"
            />
            <ErrorMessage name="phoneNumber" component="div" className="error" />
          </div>
          </div>

        
          
      </div>
      <button type="submit" className="btn btn-appointment">
          Make Appointment
        </button>
      </Form>
    </Formik>
            </div>
        </div>
      </div>
    </div>

</section>
    </div>
  )
}

export default AppointmentForm