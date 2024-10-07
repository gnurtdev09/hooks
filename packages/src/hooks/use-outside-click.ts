import { RefObject, useEffect } from "react";

/**
 * Define type
 */
type UseOutsideClickProps = {
    ref: RefObject<HTMLElement>;
    callback: () => void;
};

/**
 * Custom hook to handle outside click events
 * @param props - UseOutsideClickProps
 */
const useOutsideClick = ({ callback, ref }: UseOutsideClickProps) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback, ref]);
};

export default useOutsideClick;
