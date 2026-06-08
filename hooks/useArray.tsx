import { useState, useCallback } from 'react';

interface Output {
    array: any[];
    set: (array: any[]) => void;
    push: (item: any) => void;
    remove: (index: number) => void;
    filter: (predicate: (item: any) => boolean) => void;
    update: (index: number, newItem: any) => void;
    clear: () => void;
}

export default function useArray(defaultValue: any[]) : Output {
    const [array, setArray] = useState(defaultValue);

    const push = useCallback((item: any): void => {
        setArray(previous => [...previous, item]);
    }, []);

    const remove = useCallback((index: number): void => {
        setArray(previous => [...previous.filter((_item, currentIndex) => index < currentIndex || index > currentIndex)]);
    }, []);

    const filter = useCallback((predicate: (item: any) => boolean) => setArray(previous => previous.filter(predicate)), []);

    const update = useCallback((index: number, newItem: any) => {
        const clonedArray = [...array];

        clonedArray.splice(index, 0, newItem);

        setArray(clonedArray);
    }, []);

    const clear = useCallback(() => setArray([]), [])

    return {
        array,
        set: setArray,
        push,
        remove,
        filter,
        update,
        clear,
    }
}