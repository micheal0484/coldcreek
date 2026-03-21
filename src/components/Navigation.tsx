'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    )}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              'text-xl font-bold transition-colors duration-300',
              isScrolled ? 'text-forest-green' : 'text-white'
            )}
          >
            Cold Creek Land Services
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-300 hover:text-safety-orange',
                    pathname === item.href
                      ? 'text-safety-orange'
                      : isScrolled 
                        ? 'text-forest-green' 
                        : 'text-white'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className={cn(
                'flex items-center space-x-1 transition-colors duration-300',
                isScrolled ? 'text-forest-green' : 'text-white'
              )}>
                <Phone className="h-4 w-4" />
                <span>(XXX) XXX-XXXX</span>
              </div>
              <div className={cn(
                'flex items-center space-x-1 transition-colors duration-300',
                isScrolled ? 'text-forest-green' : 'text-white'
              )}>
                <Mail className="h-4 w-4" />
                <span>info@coldcreeklandservices.com</span>
              </div>
            </div>

            <Button size="sm" variant="primary" onClick={() => window.location.href = '/contact'}>
              Get Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={cn(
              'md:hidden p-2 rounded-md transition-colors duration-300',
              isScrolled ? 'text-forest-green' : 'text-white'
            )}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-stone-gray-light"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200',
                      pathname === item.href
                        ? 'text-safety-orange bg-forest-green/5'
                        : 'text-forest-green hover:text-safety-orange hover:bg-forest-green/5'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="px-3 py-4 border-t border-stone-gray-light space-y-2">
                  <div className="flex items-center space-x-2 text-forest-green">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">(XXX) XXX-XXXX</span>
                  </div>
                  <div className="flex items-center space-x-2 text-forest-green">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">info@coldcreeklandservices.com</span>
                  </div>
                  <Button size="sm" variant="primary" className="w-full mt-3" onClick={() => window.location.href = '/contact'}>
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}