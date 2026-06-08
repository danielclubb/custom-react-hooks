import { useState, useCallback } from 'react';

type Output = [any, () => void];

export default function useCycle(...args: any[]) : Output {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cycle = useCallback(() => {
        setCurrentIndex((previous) => (previous + 1) % args.length);
    }, []);

    return [
        args[currentIndex],
        cycle
    ]
}
