import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from "../assets/logo2.png"
import {Link} from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#023262] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:"50px"}}/>
        </div>

        {/* Menu */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>
                  <Link to='home' smooth={true} duration={500}>
                  Home
                  </Link>
                </li>
                <li>
                <Link to='about' smooth={true} duration={500}>
                  About Me
                  </Link>
                </li>
                <li>
                <Link to='skills' smooth={true} duration={500}>
                  Skills
                  </Link>
                </li>
                <li>
                <Link to='projects' smooth={true} duration={500}>
                  Projects
                  </Link>
                </li>
                <li>
                <Link to='contact' smooth={true} duration={500}>
                  Contact Me
                  </Link>
                </li>
            </ul>
        </div>
        {/* Hamburger Menu */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#023262] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About Me
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
            </Link></li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact Me
          </Link>
          </li>
        </ul>



        {/* Social Links */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-900'>
              <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/RubenFr74'>
                GitHub <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
              <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/ruben-franco-219b20b3/'>
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href='mailto:ruben.afranco@yahoo.com'>
                Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
              <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                Resume <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>

        </div>
    </div>
  );
};

export default Navbar