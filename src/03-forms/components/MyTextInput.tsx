import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;   // comodin cualquier cosa q no este contemplada arriba
}


export const MyTextInput = ( { label, ...props }: Props ) => {

    const [ field ] = useField(props);
    // const [ field, meta ] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input className="text-input" {...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" />
            {/* <ErrorMessage name={ props.name } component="span" className="custom-spam-error-span" /> */}
        </>
    )
}
