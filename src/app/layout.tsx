import type { Metadata } from 'next';
import './globals.css';
import { Footer, Header } from '@/components';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-[1280px] min-h-screen p-5 mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
