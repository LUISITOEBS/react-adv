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
    maxCount: number;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Buttons: ( Props: ButttonsProps ) => JSX.Element
    Image:   ( Props: ImagesProps )   => JSX.Element;
    Title:   ( Props: TitleProps )    => JSX.Element;
}


export interface ProductInCart extends Product{
    count: number;
}

export interface onChangeArgs {
    product: Product;
    counter: number;
}

export interface initialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: ( value: number ) => void;
    reset: () => void;
}