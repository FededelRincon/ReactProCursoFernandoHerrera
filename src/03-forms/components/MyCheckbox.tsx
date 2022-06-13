import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any;   // comodin cualquier cosa q no este contemplada arriba
}


export const MyCheckbox = ( { label, ...props }: Props ) => {

    const [ field, meta ] = useField({ ...props, type: 'checkbox' });

    return (
        <>
            <label>
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label>
            <ErrorMessage name={ props.name } component="span" />
        </>
    )
}
