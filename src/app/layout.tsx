import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/Theme-Provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://g-league-l465.vercel.app'), 
  title: 'G-League - Basketball League Website',
  description:
    'A website that showcases the GravityLeague (G-League) informations, including teams, matches, player stats, and the latest news.',
  openGraph: {
    title: 'G-League - Basketball League Website',
    description: 'A website that showcases the GravityLeague (G-League) informations, including teams, matches, player stats, and the latest news.',
    url: '/', 
    siteName: 'G-League',
    images: [
      { url: '/images/logos/logo7white.png', width: 1200, height: 630 },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G-League - Basketball League Website',
    description: 'A website that showcases the GravityLeague (G-League) informations...',
    images: ['/images/logos/logo7white.png'], 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
