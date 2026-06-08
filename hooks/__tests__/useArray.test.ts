import { act, renderHook } from '@testing-library/react';

import useArray from '../useArray';

describe('useArray', () => {
    test('default value', () => {
        const defaultValue = ['test'];
        const { result } = renderHook(() => useArray(defaultValue));

        expect(result.current.array).toEqual(defaultValue);
    });

    test('set method', () => {
        const defaultValue = ['test'];
        const { result } = renderHook(() => useArray(defaultValue));

        expect(result.current.array).toEqual(defaultValue);

        const newArray = ['this', 'is', 'a', 'test'];

        act(() => {
            result.current.set(newArray)
        });

        expect(result.current.array).toEqual(newArray);
    });

    test('push method', () => {
        const { result } = renderHook(() => useArray([]));

        expect(result.current.array).toEqual([]);

        act(() => {
            result.current.push('test')
        });

        expect(result.current.array).toEqual(['test']);
    });

    test('remove method', () => {
        const defaultValue = ['this', 'is', 'a', 'test'];

        const { result } = renderHook(() => useArray(defaultValue));

        act(() => {
            result.current.remove(1);
        });

        expect(result.current.array).toEqual(['this', 'a', 'test']);
    });

    test('filter method', () => {
        const defaultValue = [0, 1, 2, 3, 4, 5, 6];

        const predicate = (item: number) => item > 3;

        const { result } = renderHook(() => useArray(defaultValue));

        act(() => {
            result.current.filter(predicate);
        });

        expect(result.current.array).toEqual([4, 5, 6]);
    });

    test('update method', () => {
        const defaultValue = ['this', 'is', 'a', 'test'];

        const { result } = renderHook(() => useArray(defaultValue));

        act(() => {
            result.current.update(3, 'good');
        });

        expect(result.current.array).toEqual(['this', 'is', 'a', 'good', 'test']);
    });

    test('clear method', () => {
        const defaultValue = ['this', 'is', 'a', 'test'];

        const { result } = renderHook(() => useArray(defaultValue));

        act(() => {
            result.current.clear();
        });

        expect(result.current.array).toEqual([]);
    });
});