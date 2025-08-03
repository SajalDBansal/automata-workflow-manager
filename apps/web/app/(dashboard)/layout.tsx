import { SessionProvider } from "@/providers/SessionProvider";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="min-h-screen bg-white">
            {/* <SessionProvider> */}
            {children}
            {/* </SessionProvider> */}
        </div>
    );
}