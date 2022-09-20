# Kristhdev-Product-Card

Este es un paquete de pruebas de despliegues en npm

### Kristhian Ferrufino

## Ejemplo:


```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'kristhdev-product-card';
```

```
<ProductCard
    product={ product }
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    { ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    ) }
</ProductCard>
```