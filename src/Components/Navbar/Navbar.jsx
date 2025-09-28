import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];


const Navbar = () => {
  const [open,setOpen]=useState(false)
  const links= navData.map(link =>  <li className=' hover:bg-blend-hard-light hover:bg-amber-400 rounded-lg px-4  md:mr-10'><a href={link.path}>{link.name}</a></li>)

    return (
     
        <nav className='flex justify-between mx-10 mt-4'>
           <span className='flex' onClick={()=>setOpen(!open)}>
            {
                open ? <X className='md:hidden'></X> :   <Menu className='md:hidden'></Menu>
            }
          <ul className={`md:hidden absolute duration-1000
             ${open ? "top-8 " : "-top-40"}
             bg-amber-200 
             text-black 
              `}>
               {links}
          </ul>
            <h1 className='ml-4'>My Navbar</h1>

           </span>
            <ul className='md:flex  hidden'>

                {
                   
             links
                    
                }
                {/* <li><a href='./'>Home</a></li>
                <li><a href='./About'>About</a></li>
                <li><a href='./Blog'>Blog</a></li>
                <li><a href='./'>Home</a></li> */}

            </ul>
            <button>Sign in</button>
            
        </nav>
    );
};

export default Navbar;