// src/components/Header/navLinksData.ts

export interface NavLink {
    label: string;
    href: string;
  }
  
  export const navLinks: NavLink[] = [
    { label: 'About', href: '#Aboutme' },
    { label: 'Journey', href: '#Journey' },
    { label: 'Skills', href: '#Skills' },
    { label: 'Projects', href: '#Projects' },
    { label: 'Contacts', href: '#Contacts' },
  ];
  