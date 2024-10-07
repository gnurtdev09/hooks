import { useCallback, useEffect, useState } from "react";

/**
 * Define type
 */
type UseLocalStorageProps = {
    key: string;
    initValue?: string;
    isAutoCreate?: boolean;
};

/**
 * Hook to use local storage
 * @param props - UseLocalStorageProps
 * @returns { value: string, setItem: (value: string) => void, removeItem: () => void } - Local storage value, set value in local storage and remove value in local storage function
 */
const useLocalStorage = ({
    key,
    initValue = "",
    isAutoCreate,
}: UseLocalStorageProps) => {
    const [value, setValue] = useState<string>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initValue;
        } catch {
            return initValue;
        }
    });

    const setItem = useCallback(
        (newValue: string) => {
            localStorage.setItem(key, JSON.stringify(newValue));
            setValue(newValue);
        },
        [key]
    );

    const removeItem = useCallback(() => {
        localStorage.removeItem(key);
        setValue("");
    }, [key]);

    useEffect(() => {
        const valueWithKey = localStorage.getItem(key);
        if (isAutoCreate && !valueWithKey) {
            localStorage.setItem(key, initValue);
        }
    }, [key, initValue, isAutoCreate]);

    return { value, setItem, removeItem };
};

export default useLocalStorage;
