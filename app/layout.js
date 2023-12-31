import Navbar from '@/components/elements/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MongoDB CRUD',
  description: 'Learning Nextjs CRUD',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='max-w-3xl p-4 mx-auto'>
          <Navbar />
          <div className='mt-6'>{children}</div>
        </div>
      </body>
    </html>
  );
}
