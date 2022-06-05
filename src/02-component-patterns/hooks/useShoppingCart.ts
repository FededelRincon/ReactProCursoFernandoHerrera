import { useState } from "react";
import { Product, ProductInCart } from '../interfaces/Product.interfaces';





export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]:ProductInCart }>({  });

    const onProductCountChange = ( { count, product}: {count:number, product:Product} ) => {

        setShoppingCart( oldShoppingCart => {

            if ( count === 0 ) {
                const { [product.id]:toDelete, ...rest } = oldShoppingCart; //al llegar a cero quiero quitar ese elemento del carrito, => separo lo q quiero borrar y el rest, y return del resto

                return rest
            } 

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }
        })
    }

    return {
        shoppingCart,

        onProductCountChange,
    }
}