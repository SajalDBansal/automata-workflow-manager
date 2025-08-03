"use client";

import { useRouter } from "next/navigation";


export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    // if (typeof window === 'undefined') return null;
    const token = localStorage.getItem('token');
    console.log(token);

    const router = useRouter();

    if (!token) {
        router.push('/');
        return null;
    }

    return (
        <div>
            {children}
        </div>
    );
};