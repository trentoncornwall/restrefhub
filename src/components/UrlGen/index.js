import React from "react";
import { Formik } from 'formik';
import './index.css'

function UrlGen() {
  return (
    <div className='Urlgen'>
 <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{
           region: '',
           rid: '',
           date: '',
           time: '', 
           party: '',
           source: '',
           campaign: ''
        }}

      validate={values => {
        const errors = {};
        if (!values.rid || !values.date || !values.time || !values.party ) {
            errors.rid = 'Required';
            errors.date = 'Required';
            errors.time = 'Required';
            errors.party = 'Required';
        } 
        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}

    >

      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="region"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.region}
          />
          <input
            type="number"
            name="rid"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rid}
          />
               <input
            type="date"
            name="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.date}
          />
          <input
            type="time"
            name="time"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.time}
          />
          
         {/* {errors.password && touched.password && errors.password} */}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
    </div>
  );
}

export default UrlGen;
