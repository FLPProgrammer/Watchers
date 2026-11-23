
import type { Metadata } from "next";
import { Poppins, Cinzel } from "next/font/google";
import { Providers } from "../Context/Providers";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
    variable: "--font-cinzel",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Watchers",
    description: "Watchers Streaming",
};

export default function RootLayout({
    children,
}: LayoutProps<"/">) {
    return (
        <html
            lang="pt-BR"
            className={`${poppins.variable} ${cinzel.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
