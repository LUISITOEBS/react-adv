import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ( { product, counter}: { product: Product, counter: number } ) => {
        setShoppingCart( oldShoppingCart => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if( Math.max(productInCart.count + counter, 0) > 0 ){
                productInCart.count += counter;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }
            const { [ product.id ]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest }
            // if( counter === 0 ){
            //     const { [ product.id ]: toDelete, ...rest } = oldShoppingCart;
            //     return {
            //         ...rest
            //     }
            // }

            // return {
            //     ...oldShoppingCart,
            //     [ product.id ]: { ...product, count: counter },
            // }
        });
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
