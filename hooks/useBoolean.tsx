import { useState, useCallback } from 'react';

interface Output {
    value: boolean,
    setTrue: () => void;
    setFalse: () => void;
}

export default function useBoolean(initialValue = false): Output {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setTrue: useCallback(() => setValue(true), []),
        setFalse: useCallback(() => setValue(false), []),
    };
}