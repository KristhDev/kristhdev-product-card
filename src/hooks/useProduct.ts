import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product, InitialValues } from '../interfaces/products';

interface UseProductsArgs {
    product: Product;
    initialValues?: InitialValues;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}

const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductsArgs) => {
    const [ counter, setCounter ] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        let newValue =  Math.max(counter + value, 0);

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);
        onChange && onChange({ product, count: newValue });
    }

    const reset = () => setCounter(initialValues?.count || value);

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [ value ]);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        }
    }, []);

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
        maxCount: initialValues?.maxCount,
        reset
    }
}

export default useProduct;