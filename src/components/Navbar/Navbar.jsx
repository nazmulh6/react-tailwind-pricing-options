import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Services",
    path: "/services"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];



const Navbar = () => {
  const [open, setOpen] = useState(false)
  const links =navLinks.map(route => <li className='mr-10 hover:bg-amber-400'><a href={route.path}>{route.name}</a></li>)
  return (
    <nav className='flex justify-between mx-auto max-w-[1200px] mt-4'>
      <span className='flex items-center' onClick={() => setOpen(!open)}>
        {
          open ?
            <X className='md:hidden'></X> :
            <Menu className='md:hidden'></Menu>
        }
<ul className={`md:hidden absolute bg-amber-200 p-4 duration-1000 ${open? 'top-8 ': '-top-40 '}`}>
  {links}
</ul>
        <h2 className='ml-2 font-bold'>My Nav</h2>
      </span>
      <ul className='md:flex hidden '>
        {
          links
        }
      </ul>
      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;