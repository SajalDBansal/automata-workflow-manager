// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function Error() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
            <h1 className="text-6xl font-bold text-gray-800">500</h1>
            <p className="text-xl mt-4 text-gray-600">Internal Server Error</p>
            <Link
                href="/"
                className="bg-orange-500 text-white mt-6 px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors text-xl"
            >
                Back to Home
            </Link>
        </div>
    );
}


