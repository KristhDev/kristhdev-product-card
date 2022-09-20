import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from './ProductsButtons';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';

import { ProductCardHOCProps } from '../../interfaces/products';

export { ProductButtons } from './ProductsButtons';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});