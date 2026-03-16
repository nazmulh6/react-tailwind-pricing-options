import React from 'react';

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
    return (
        <nav >
<ul className='flex justify-center'>
    {
    navLinks.map(route =><li className='mr-10'><a href={route.path}>{route.name}</a></li>)
}
</ul>

            {/* <ul className='flex gap-5'>
                <li><a href="/home"> Home</a></li>
                <li><a href="/about"> About</a></li>
                <li><a href="/blog"> Blog</a></li>
                <li><a href="/contact"> Contact</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;