import { Formik, Form } from 'formik';

import { MySelect, MyTextInput } from '../components';
import formJSON from '../data/custom-form.json';
import * as Yup from 'yup';


const initialValues: { [key:string]: any } = {};
const requiredFields: { [key:string]: any } = {};


for (const input of formJSON) {
    initialValues[ input.name ] = input.value
    if( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if(rule.type === 'required') {
            schema = schema.required('Este campo es requerido');
        }
        
        if(rule.type === 'minLength') {
            schema = schema.min( (rule as any).value || 1 ,`minimo de ${ (rule as any).value || 1 } de caracteres`);
        }

        if(rule.type === 'maxLength') {
            schema = schema.min( (rule as any).value || 15 ,`Maximo de ${ (rule as any).value || 15 } de caracteres`);
        }

        if(rule.type === 'email') {
            schema = schema.email( `Revise el formato del email`);
        }
    }

    requiredFields[input.name] = schema;
}


const validationSchema = Yup.object({ ...requiredFields })


export const DynamicFormPage = () => {

    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={ initialValues }
                onSubmit= { (values) => {
                    console.log(values)
                }}
                validationSchema={ validationSchema }
            >
                {(formik) => (
                    <Form noValidate>
                        { formJSON.map( ({ type, name, placeholder, label, options }) => {

                            if( type === 'input' || type === 'password' || type === 'email') {
                                return <MyTextInput 
                                            key={ name }
                                            type={ (type as any) } 
                                            name={ name } 
                                            label={ label } 
                                            placeholder={ placeholder } />
                            } else if ( type === 'select') {
                                return (
                                    <MySelect 
                                        key={name}
                                        label={ label }
                                        name={ name }
                                    >
                                        <option value="">Select an option</option>
                                        {
                                            options?.map( ({ id, label }) => (
                                                <option key={ label } value={ id }>{ label }</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                            }

                            throw new Error (`El type ${type} no es soportado`)
                            // return <span>Type: {type} no es soportado. Nunca tendria q ver esto !!!!!!!!!</span>
                        })}

                        <button type="submit" >Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
