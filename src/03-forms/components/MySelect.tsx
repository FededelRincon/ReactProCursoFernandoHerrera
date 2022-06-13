import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;   // comodin cualquier cosa q no este contemplada arriba
}


export const MySelect = ( { label, ...props }: Props ) => {

    const [ field ] = useField(props);
    // const [ field, meta ] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <select {...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" />
        </>
    )
}
