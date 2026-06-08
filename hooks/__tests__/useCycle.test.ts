import { act, renderHook } from '@testing-library/react';

import useCycle from '../useCycle';

describe('useCycle', () => {
    const defaultArgs = ['low', 'medium', 'high'];

    test('returns values', () => {
        const { result } = renderHook(() => useCycle(...defaultArgs));

        expect(result.current[0]).toEqual(defaultArgs[0]);
        expect(result.current[1] instanceof Function).toBe(true);
    });

    test('cycles through values and resets to first element', () => {
        const { result } = renderHook(() => useCycle(...defaultArgs));

        const cycleFunction = result.current[1];

        act(() => {
            cycleFunction();
            cycleFunction();
            cycleFunction();
        });

        expect(result.current[0]).toEqual(defaultArgs[0]);
    });
});