import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';



export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{ 
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({ 
                    name: Yup.string()
                                .required('Requerido')
                                .min(2, 'El nombre debe tener mas de 2 caracteres')
                                .max(15, 'El nombre debe tener como maximo 15 caracteres'),
                    email: Yup.string()
                                .required('Requerido')
                                .email('No tiene formato de email'),
                    password1: Yup.string()
                                .required('Requerido')
                                .min(6, 'El nombre debe tener mas de 6 caracteres'),
                    password2: Yup.string()
                                .required('Requerido')
                                .min(6, 'El nombre debe tener mas de 6 caracteres')
                                .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
                })}
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            {/* name */}
                            <label htmlFor='name'>Nombre</label>
                            <Field id="name" name="name" type="text" placeholder="Nombre..." />
                            <ErrorMessage name="name" component='span' />

                            {/* Email */}
                            <label htmlFor='email'>Email</label>
                            <Field id="email" name="email" type="email" placeholder="Email..." />
                            <ErrorMessage name="email" component='span' />

                            {/* Password1 */}
                            <label htmlFor='password1'>Password</label>
                            <Field id="password1" name="password1" type="password" placeholder="Password..." />
                            <ErrorMessage name="password1" component='span' />

                            {/* Password2 */}
                            <label htmlFor='password2'>Confirmacion Password</label>
                            <Field id="password2" name="password2" type="password" placeholder="Confirmacion Password..." />
                            <ErrorMessage name="password2" component='span' />

                            <button type="submit">Create</button>
                            <button type='button' onClick={ handleReset } >Reset Form</button>
                    
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
