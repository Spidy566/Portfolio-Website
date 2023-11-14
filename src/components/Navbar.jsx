import React,{ useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
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
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-slate-950 fixed'>
        <div>
            <h1 className='text-5xl font-signautre ml-2'>Vishal</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer captialize hover: duration-200'>
            {/* <Link to={link} smooth duration={500}> */}
            {link}
            {/* </Link> */}
            </li>
        ))}
        </ul>
        <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-red-300 text-yellow-500">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            {/* <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}> */}
            {link}
            {/* </Link> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;