import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AnimatedLayout from '@/components/AnimatedLayout'; // <= Import correct

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my professional portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
