import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardComponent } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';


export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardComponent , {
    Title:  ProductTitle,
    Image:  ProductImage,
    Buttons:  ProductButtons
}

);

export default ProductCard;