import React from 'react';
import renderer from 'react-test-renderer';

import { ProductImage, ProductCard } from '../../../components';

import { product2 } from '../../data/products';

describe('Test in <ProductImage />', () => {
    it('Debe mostrar el componente correctamente con el titulo', () => {
        const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('Debe mostrar el componente con la imagen', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                { () => (
                    <ProductImage />
                ) }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});