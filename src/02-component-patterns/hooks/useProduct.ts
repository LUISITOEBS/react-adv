import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, initialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (Props: onChangeArgs) => void;
    value?: number;
    initialValues?: initialValues;
}

export const useProduct = ( { product, onChange, value = 0, initialValues }: useProductArgs ) => {

    const [counter, setCounter] = useState( initialValues?.count || value  );

    const isMounted = useRef(false);

    const isControlled = useRef( !!onChange );

    const increaseBy = ( value: number ) => {
        if( isControlled.current ){
            return onChange!({ product, counter: value });
        }

        if( initialValues?.maxCount && (counter + value) > initialValues.maxCount ) return;
        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );
    }

    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    useEffect(() => {
        if( !isMounted.current ) return;
        console.log('NOT excecuted');
        setCounter( value );
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);
    

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === counter,
        maxCount: initialValues?.maxCount || 0,
        reset
    }
}
