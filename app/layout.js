import './globals.css'
import Link from 'next/link'

export const metadata = {
      title: 'still88',
      description: 'Focused vision, strong values, a long-term strategy and a history of excellence.',
}

export default function RootLayout({ children }) {
      return (
              <html lang="en">
                <body className="min-h-screen flex flex-col">
      {/* Header / Nav */}
                  <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
                    <div className="flex items-center justify-between px-8 py-3">
                      <Link href="/">
                        <img
                    src="http://3.141.1.117/wp-content/uploads/2016/01/logo-whites-2.png"
                    alt="still88"
                    className="h-14 w-auto"
                  />
                        </Link>
                <nav className="flex gap-8">
                                      <Link href="/" className="text-white text-sm tracking-widest uppercase hover:text-gray-300 transition-colors">Home</Link>
                  <Link href="/services" className="text-white text-sm tracking-widest uppercase hover:text-gray-300 transition-colors">Services</Link>
                  <Link href="/portfolio" className="text-white text-sm tracking-widest uppercase hover:text-gray-300 transition-colors">Portfolio</Link>
                  <Link href="/careers" className="text-white text-sm tracking-widest uppercase hover:text-gray-300 transition-colors">Careers</Link>
                        </nav>
                        </div>
                        </header>

    {/* Page content pushed below fixed header */}
            <main className="flex-1 pt-20">
            {children}
                </main>

    {/* Footer */}
            <footer className="bg-gray-200 px-10 py-8">
                          <img
                src="http://3.141.1.117/wp-content/uploads/2016/02/footer-still88-logo.png"
                alt="still88"
                className="h-12 w-auto mb-4"
              />
                              <p className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                                <span>✉</span> info@still88.com
                    </p>
                    </footer>
            <div className="bg-gray-300 px-10 py-3 text-center text-gray-600 text-xs">
                              Copyright © 2012 still88. • All rights reserved
                    </div>
                    </body>
                    </html>
      )
}
