import { ReactElement } from 'react';
import { Props as ProductButtonsProps } from '../components/ProductCard/ProductsButtons';
import { Props as ProductCardProps } from '../components/ProductCard/ProductCard';
import { Props as ProductImageProps } from '../components/ProductCard/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductCard/ProductTitle';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}

export interface ProductCardHOCProps {
    (props: ProductCardProps): ReactElement;
    Title: (props: ProductTitleProps) => JSX.Element;
    Image: (props: ProductImageProps) => JSX.Element;
    Buttons: (props: ProductButtonsProps) => JSX.Element;
}

export interface OnChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}