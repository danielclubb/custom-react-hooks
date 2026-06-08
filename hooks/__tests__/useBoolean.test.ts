import { act, renderHook } from '@testing-library/react';

import useBoolean from '../useBoolean';

describe('useBoolean', () => {
    test('no default value passed', () => {
        const { result } = renderHook(() => useBoolean());

        expect(result.current.value).toBe(false);
    });

    test('default value true', () => {
        const { result } = renderHook(() => useBoolean(true));

        expect(result.current.value).toBe(true);
    });

    test('default value false', () => {
        const { result } = renderHook(() => useBoolean(false));

        expect(result.current.value).toBe(false);
    });

    test('setTrue method', () => {
        const { result } = renderHook(() => useBoolean(false));

        act(() => result.current.setTrue());

        expect(result.current.value).toBe(true);
    });

    test('setFalse method', () => {
        const { result } = renderHook(() => useBoolean(true));

        act(() => result.current.setFalse());

        expect(result.current.value).toBe(false);
    });
});