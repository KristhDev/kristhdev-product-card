import React from 'react';
import renderer from 'react-test-renderer';

import { ProductTitle, ProductCard } from '../../../components';

import { product1 } from '../../data/products';

describe('Test in <ProductTitle />', () => {
    it('Debe mostrar el componente correctamente con el titulo', () => {
        const wrapper = renderer.create(<ProductTitle title="Custom Product" />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('Debe mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                { () => (
                    <ProductTitle />
                ) }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});