import React from 'react';

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];


const Navbar = () => {
    return (
        <nav>
            <ul className='flex text-center items-center'>

                {
                    navData.map(link =>  <li className='mr-10'><a href={link.path}>{link.name}</a></li>)

                    
                }
                {/* <li><a href='./'>Home</a></li>
                <li><a href='./About'>About</a></li>
                <li><a href='./Blog'>Blog</a></li>
                <li><a href='./'>Home</a></li> */}

            </ul>
            
        </nav>
    );
};

export default Navbar;