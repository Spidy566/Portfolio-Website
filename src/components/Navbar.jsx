import React,{ useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav ] = useState(false);

    const links =[
        {id : 1, link: 'Home'},
        {id : 2, link: 'About'},
        {id : 3, link: 'Projects'},
        {id : 4, link: 'Contact'},
    ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black bg-opacity-95 fixed'>
        <div>
            <h1 className='text-5xl font-signautre ml-2 text-yellow-500'>Vishal</h1>
        </div>

        <ul className='hidden md:flex flex-grow justify-center'>
            {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer captialize hover: duration-200 items-center'>
            <Link to={link} smooth duration={500}>
            {link}
            </Link>
            </li>
        ))}
        </ul>
        {nav && (
            <ul className="flex flex-col justify-center">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
            {link}
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;