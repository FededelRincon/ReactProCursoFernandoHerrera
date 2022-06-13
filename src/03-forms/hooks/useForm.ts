import { ChangeEvent, useState } from "react";





export const useForm = <T>( initState: T ) => { //la T, es del tipo generico... osea "cualquier cosa", xq depende del dato q recibo, es el dato q obtengo

    const [ formData, setFormData ] = useState(initState)

    // const { name, email, password1, password2 } = registerData;


    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        setFormData( prev => ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }

    const resetForm = () => {
        setFormData({ ...initState })
    }


    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        // Properties
        ...formData,    //lo mando separado
        formData,       //y lo mando todo junto

        // Methods
        isValidEmail,
        onChange,
        resetForm
    }
}
