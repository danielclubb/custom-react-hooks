import { act, renderHook } from '@testing-library/react';

import useDefault from '../useDefault';

describe('useDefault', () => {
    test('initial value', () => {
        const defaultValue = 1;
        const initialValue = 2;

        const { result } = renderHook(() => useDefault(defaultValue, initialValue));

        expect(result.current[0]).toBe(initialValue);
    });

    test('with string', () => {
        const defaultValue = 1;
        const initialValue = 2;

        const { result } = renderHook(() => useDefault(defaultValue, initialValue));

        act(() => {
            result.current[1]('test');
        })

        expect(result.current[0]).toBe('test');
    });

    test('default value when null', () => {
        const defaultValue = 1;
        const initialValue = 2;

        const { result } = renderHook(() => useDefault(defaultValue, initialValue));

        act(() => {
            result.current[1](null);
        });

        expect(result.current[0]).toBe(defaultValue);
    });

    test('default value when undefined', () => {
        const defaultValue = 1;
        const initialValue = 2;

        const { result } = renderHook(() => useDefault(defaultValue, initialValue));

        act(() => {
            result.current[1](undefined);
        });

        expect(result.current[0]).toBe(defaultValue);
    });
});
