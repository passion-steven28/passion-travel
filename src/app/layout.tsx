import type { Metadata } from "next";
import { Poppins, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import NavBar from "@/components/shared/NavBar";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";


const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const josefin_sans = Josefin_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
})

export const metadata: Metadata = {
  title: "Passion Travel | Travel Website",
  description: "A travel website for passion travelers and adventure seekers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("w-full h-full relative", poppins.className, "bg-white", josefin_sans.className)}>
          {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
          <NavBar />
          {children}
          {/* </ThemeProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
