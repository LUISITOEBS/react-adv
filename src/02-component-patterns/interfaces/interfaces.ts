import { Props as ButttonsProps }    from '../components/ProductButtons';
import { Props as ImagesProps }      from '../components/ProductImage';
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as TitleProps }       from '../components/ProductTitle';

export interface Product {
    id: string;
    title: string;
    image?: string
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Buttons: ( Props: ButttonsProps ) => JSX.Element
    Image:   ( Props: ImagesProps )   => JSX.Element;
    Title:   ( Props: TitleProps )    => JSX.Element;
}