import { CSSProperties, useCallback, useContext, useState } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import { initialValues } from '../interfaces/interfaces';

export interface Props {
    className?: string;
    style?: CSSProperties;
    maxCount?: number
}

export const ProductButtons = ({ className = '', style}: Props) => {

    //TODO: maxCount
    const { counter, increaseBy, maxCount } = useContext(ProductContext);

    //TODO: isMaxReached = useCallback, dependencias [ count, maxCount ];

    const isMaxReached = useCallback(() => {
        return !!maxCount && counter === maxCount ? true : false;
    }, [counter, maxCount]);

    return (
        <div 
            className={ `${styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button className={styles.buttonMinus} onClick={ () => increaseBy(-1) }>-</button>
            <div className={styles.countLabel}> { counter } </div>
            <button className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled }`} onClick={ () => increaseBy(1) }>+</button>
        </div>
    )
}