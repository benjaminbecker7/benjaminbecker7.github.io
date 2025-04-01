'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const navItems = [
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-xl font-bold text-primary hover:text-primary-light transition-colors">
            Ben
          </Link>
        </motion.div>

        <ul className="flex space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-text-light hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}