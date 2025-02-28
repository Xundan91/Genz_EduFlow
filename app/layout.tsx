import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import AuthSessionProvider from "@/components/providers/session-provider"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduFlow LMS',
  description: 'Modern Learning Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <AuthSessionProvider>
          {children}
        </AuthSessionProvider>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}