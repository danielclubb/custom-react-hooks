import { act, renderHook } from '@testing-library/react';

import useCounter from '../useCounter';

describe('useCounter', () => {
    test('increment method', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.count).toBe(0);

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1);
    });

    test('decrement method', () => {
        const { result } = renderHook(() => useCounter(2));

        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(1);
    });

    test('reset method', () => {
        const { result } = renderHook(() => useCounter(10));

        act(() => {
            result.current.decrement();
            result.current.decrement();
            result.current.decrement();
            result.current.reset();
        });

        expect(result.current.count).toBe(10);
    });
});