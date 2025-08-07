'use client'; // only if you're using App Router

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation'; // or 'next/navigation' in App Router

interface SessionProviderProps {
    children: React.ReactNode;
}

const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && pathname === '/') {
            // Redirect to /app if token exists
            router.push('/app');
        }
    }, [pathname]);

    return <>{children}</>;
};

export default SessionProvider;
