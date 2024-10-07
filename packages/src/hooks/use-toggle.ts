import { useCallback, useState } from "react";

/**
 * Define type
 */
type UseToggleProps = {
    initValue?: boolean;
};

/**
 * Hook to toggle a boolean value
 * @param props - UseToggleProps
 * @returns { value: boolean, onToggle: () => void } - Current value and toggle function
 */
const useToggle = ({ initValue = false }: UseToggleProps) => {
    const [value, setValue] = useState<boolean>(initValue);

    const onToggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    return { value, onToggle };
};

export default useToggle;
