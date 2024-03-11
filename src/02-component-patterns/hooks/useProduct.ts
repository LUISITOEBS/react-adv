import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (Props: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ( { product, onChange, value = 0 }: useProductArgs ) => {

    const [counter, setCounter] = useState( value );

    const isControlled = useRef( !!onChange );

    const increaseBy = ( value: number ) => {
        if( isControlled.current ){
            return onChange!({ product, counter: value });
        }
        
        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );

    }

    useEffect(() => {
        setCounter( value );
    }, [value])

    return {
        counter,
        increaseBy
    }
}
