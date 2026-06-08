import { act, renderHook } from '@testing-library/react';

import useBoolean from '../useBoolean';

describe('useDefault', () => {
    test('no default value passed', () => {
        const {result} = renderHook(() => useBoolean());

        expect(result.current.value).toBe(false);
    });
});