import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';


export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components Tutorial</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ (values) => {
                    console.log(values)
                } }
                validationSchema={Yup.object({
                    firstName: Yup.string()
                                    .min(6, 'Debe de tener como minimo 6 caracteres')
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .min(6, 'Debe de tener como minimo 6 caracteres')
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                .min(4, 'Debe de tener como minimo 6 caracteres')
                                .email('El correo no tiene un formato valido')
                                .required('Requerido'),
                    terms: Yup.boolean()
                                .isTrue('Debe aceptar terminos y condiciones'),
                    jobType: Yup.string()
                                .required('Requerido')
                                // .oneOf([])
                                .notOneOf([ 'it-jr' ], 'Hay muchos jr, opcion no permitida')    
                })}
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor='firstName'>First Name</label>
                            <Field name="firstName" type="text" placeholder="First name" />
                            <ErrorMessage name="firstName" component='span' />

                            <label htmlFor='lastName'>Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component='span' />

                            <label htmlFor='email'>Email Address</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email"  component='span'/>

                            {/* select */}
                            <label htmlFor='jobType'>Job Type</label>
                            <Field name="jobType" as="select" >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr</option>
                            </Field>
                            <ErrorMessage name="jobType" component='span'/>

                            {/* checkbox */}
                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms"  component='span'/>



                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>

            

        </div>
    )
}
