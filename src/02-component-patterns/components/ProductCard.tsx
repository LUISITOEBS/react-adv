import { ReactElement, createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, initialValues, ProductCardHandlers } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( Props: ProductCardHandlers ) => JSX.Element;
    className?:  string;
    style?: CSSProperties;
    onChange?: ( Props: onChangeArgs ) => void;
    value?: number;
    initialValues?: initialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  
    const { counter, increaseBy, maxCount, reset, isMaxCountReached } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product,
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }`} 
                style={ style }
            >
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                }
            </div>
        </Provider>
        
    );
};