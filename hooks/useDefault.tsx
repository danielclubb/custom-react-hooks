import { useState } from "react";

export default function useDefault(defaultValue: any, initialValue: any) {
    const [value, setValue] = useState(initialValue);

    const valueToReturn = value === null || value === undefined ? defaultValue : value;

    return [
        valueToReturn,
        setValue
    ]
}