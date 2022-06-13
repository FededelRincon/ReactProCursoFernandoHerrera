import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';



import '../styles/styles.css';


export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction Tutorial</h1>

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
                            <MyTextInput 
                                label="First Name" 
                                name="firstName" 
                                placeholder="Fernando"
                            />

                            <MyTextInput 
                                label="Last Name" 
                                name="lastName" 
                                placeholder="Herrera"
                            />

                            <MyTextInput 
                                label="Email Address"
                                name="email"
                                placeholder="google@gmail.com"
                                type="email"
                            />

                            {/* select */}
                            <MySelect 
                                label={'Job Type'} 
                                name={'jobType'} 
                            >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr</option>
                            </MySelect>

                            {/* checkbox */}
                            <MyCheckbox label='Terms and conditions' name='terms' />

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>

            

        </div>
    )
}
