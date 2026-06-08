import { useState, useCallback } from 'react';

interface Output {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    setCount: (value: number) => void;
}

export default function useCounter(initialValue = 0): Output {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => setCount(previous => previous + 1), []);
    const decrement = useCallback(() => setCount(previous => previous - 1), []);
    const reset = useCallback(() => setCount(initialValue), []);

    return {
        count,
        increment,
        decrement,
        reset,
        setCount,
    }
}