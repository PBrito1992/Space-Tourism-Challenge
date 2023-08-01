import { useState, useEffect } from "react";

const DESKTOP_THRESHOLD = 1024

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () =>
            setIsMobile(window.innerWidth < DESKTOP_THRESHOLD)
        );

        setIsMobile(window.innerWidth < DESKTOP_THRESHOLD)

        return () =>
            window.removeEventListener("resize", () =>
                setIsMobile(window.innerWidth < DESKTOP_THRESHOLD)
            );
    }, []);

    return isMobile
}

export { useIsMobile }