// app/layout.tsx
import type {Metadata} from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import {Toaster} from "@/components/ui/sonner"
import { ExitModal } from "@/store/exit-modal";
const font = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Lingo!",
  description: "Language learning app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${font.variable} font-sans antialiased`}>
          <Toaster/>
          <ExitModal/>
          {children} 
           
        </body>
      </html>
    </ClerkProvider>
  );
}