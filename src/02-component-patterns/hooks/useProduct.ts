import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from '../interfaces/Product.interfaces';


interface useProducArgs {
    product: Product;
    onChange?: (args: onChangeArgs ) => void;
    value?: number;
}


export const useProduct = ( { onChange, product, value = 0 }:useProducArgs ) => {
    
    const [counter, setCounter] = useState( value );
    const isControlled = useRef( !!onChange );  // !onChange = false, !!onChange = true

    const increaseBy = ( value:number ) => {

        if( isControlled.current) {
            return onChange!({ count: value, product }) //esto es para obligar a typescript q dice q yo se lo q hago
        }

        const newValue = Math.max(counter + value, 0);

        setCounter( newValue ) 

        onChange && onChange({ count: newValue, product}); //si tengo onChange ejecutalo, sino no hagas nada
    }

    useEffect(() => {
        setCounter( value )
    }, [ value ])
    

    return {
        counter,
        increaseBy
    }
    
}
