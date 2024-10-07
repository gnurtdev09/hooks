import { RefObject, useCallback, useEffect, useState } from "react";

/**
 * Define type
 */
type Position = {
    top: number;
    left: number;
    width: number;
    height: number;
};

/**
 * Custom hook to get coords base on ref
 * @return {Object} - Data position of ref
 */
const useCoord = (ref: RefObject<HTMLElement>) => {
    const [position, setPosition] = useState<Position>({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    });

    const updatePosition = useCallback(() => {
        const rect = ref.current?.getBoundingClientRect();

        if (rect) {
            setPosition({
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
                height: rect.height,
            });
        }
    }, [ref]);

    useEffect(() => {
        updatePosition();
    }, [updatePosition]);

    return position;
};

export default useCoord;
