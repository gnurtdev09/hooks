import { useCallback, useState } from "react";

/**
 * Hook to use clipboard
 * @returns { isCopy: boolean, setItem: (value: string) => void, removeItem: () => void } - Is copy state and copy functionality
 */
const useClipboard = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const copyToClipboard = useCallback((text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
        });
    }, []);

    return { isCopied, copyToClipboard };
};

export default useClipboard;
