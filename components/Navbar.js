'use client'
  import { useState } from 'react'
    import Link from 'next/link'
    import { usePathname } from 'next/navigation'

const links = [
{ href: '/', label: 'Home' },
{ href: '/services', label: 'Services' },
{ href: '/portfolio', label: 'Portfolio' },
{ href: '/careers', label: 'Careers' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628] bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-[#c9a96e] text-3xl font-playfair font-bold tracking-widest hover:text-white transition-colors">
          88
        </Link>

{/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
{links.map(link => (
            <Link key={link.href} href={link.href}
              className={`text-xs tracking-widest uppercase font-medium transition-colors duration-200 ${
                pathname === link.href ? 'text-[#c9a96e]' : 'text-gray-300 hover:text-white'
}`}>
{link.label}
            </Link>
          ))}
        </div>

{/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

{/* Mobile Menu */}
{open && (
        <div className="md:hidden bg-[#0a1628] border-t border-white border-opacity-10 px-6 py-6 space-y-4">
{links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className={`block text-sm tracking-widest uppercase font-medium transition-colors ${
                pathname === link.href ? 'text-[#c9a96e]' : 'text-gray-300 hover:text-white'
}`}>
{link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
