import { useEffect, useState } from "react";

/**
 * Define type
 */
type UseDebouncedProps<T> = {
    value: T;
    delay?: number;
};

/**
 * Custom hook for debounced value
 * @param props - UseDebouncedProps
 * @returns value - debounced value
 */
const useDebounced = <T>({ value, delay = 1000 }: UseDebouncedProps<T>) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        if (delay < 0) {
            console.warn("Delay must be a non-negative number");
            return;
        }

        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounced;
