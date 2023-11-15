import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Links = () => {
    const links = [
        {
            id: 1,
            icon: (
                <>
                Github<FaGithub size={25} />
                </>
                ),
            url: 'https://github.com/Spidy566',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            icon: (
                <>
                Twitter<FaTwitter size={25} />
                </>
                ),
            url: 'https://twitter.com/Spidy566'
        },
        {
            id: 3,
            icon: (
                <>
                Mail<HiOutlineMail size={25} />
                </>
                ),
            url: 'mailto:foo@gmail.com'
        },
        {
            id: 4,
            icon: (
                <>
                LinkedIn<FaLinkedin size={25} />
                </>
            ),
            url: 'https://www.linkedin.com/in/vishal156'
        },
        {
            id: 5,
            icon: (
                <>
                Resume<BsFillPersonLinesFill size={25} />
                </>
            ),
            url: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,

        }
    ]

    return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({ id, icon, url, style, download}) => (
            <li key={id} 
            className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-stone-600' + ' '+ style}>
                <a href={url} 
                className='flex justify-between items-center w-full text-white' 
                download={download} 
                target="_blank" 
                rel="noreferrer">
                {icon}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Links