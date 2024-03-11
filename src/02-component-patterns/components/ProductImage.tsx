import { CSSProperties, useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductImage = ({ img = '', className = '', style }: Props) => {

    const { product } = useContext( ProductContext );

    let imgToShow: string;

    if( img ){
        imgToShow = img;
    }else if ( product.image ) {
        imgToShow = product.image;
    }else{
        imgToShow = noImage;
    }

    return (
        <img 
            alt="Product"
            className={ `${ styles.productImg } ${ className }` } 
            src={ imgToShow } 
            style={ style }
        />
    )
}