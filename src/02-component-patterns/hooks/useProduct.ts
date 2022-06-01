import { useState } from "react";



export const useProduct = () => {
    
    const [counter, setCounter] = useState(0);

    const increaseBy = ( value:number ) => {
        setCounter( prev => Math.max(prev + value, 0) ) //dame el maximo entre una suma y 0.... entonces siempre da positivo
    }

    return {
        counter,
        increaseBy
    }
    
}
