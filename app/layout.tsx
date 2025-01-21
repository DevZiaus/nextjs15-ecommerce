import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import ClientProviders from '@/components/shared/clientProviders'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
        title: {
            template: `%s | ${APP_NAME}`,
            default: `${APP_NAME}. ${APP_SLOGAN}`,
        },
        description: APP_DESCRIPTION,
    }

const AppLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}

export default AppLayout;
