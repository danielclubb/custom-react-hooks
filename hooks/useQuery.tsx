import { useState, useEffect } from 'react';

interface Output<T = any> {
    status: 'loading' | 'error' | 'success';
    error?: any;
    data?: T;
}

export default function useQuery<T = any>(fn: () => Promise<T>, dependencies: any[] = []): Output<T> {
    const [output, setOutput] = useState<Output<T>>({
        status: 'loading'
    });

    useEffect(() => {
        let ignore = false;

        const callFunction = async () => {
            setOutput({
                status: 'loading'
            });

            try {
                if (ignore) return;

                const response = await fn();

                setOutput({
                    status: 'success',
                    data: response
                });
            } catch (error) {
                if (ignore) return;
                setOutput({
                    status: 'error',
                    error,
                });
            }
        };

        callFunction();

        return () => {
            ignore = true;
        };
    }, dependencies);

    return output;
}