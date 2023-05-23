import { useState, useEffect } from 'react';

export const useVersion = (): boolean => {
    const isMobile = () => window.innerWidth <= 991;
    const [version, setVersion] = useState(isMobile());

    useEffect(() => {
        const handleSubscribe = () => setVersion(isMobile());
        window.addEventListener('resize', handleSubscribe)

        return () => window.removeEventListener('resize', handleSubscribe);
    });

    return version;
}