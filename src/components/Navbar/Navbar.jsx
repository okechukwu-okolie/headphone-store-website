import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'framer-motion';

const Navbar = () => {
    const NavbarMenu =[
        {
            id:1,
            title: "Home",
            link:"#"
        },
        {
            id:2,
            title: "Category",
            link:"#"
        },
        {
            id:3,
            title: "Blog",
            link:"#"
        },
        {
            id:4,
            title: "About",
            link:"#"
        },
        {
            id:5 ,
            title: "Contact",
            link:"#"
        },
    ]

  return (
    <>
        <div className='bg-brandDark text-white py-8 font-varela' >
            <motion.nav className='container flex justify-between items-center'
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay:.5}}>
        {/* logo section */}
        <div>
            <a href="#" className='text-xl font-bold uppercase'>
                Playing/ <span className='font-extralight text-white/70'>Market</span>
            </a>
        </div>
        {/* menu section */}
        <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
                {NavbarMenu.map((item)=>(
                    <li key={item.id}>
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor:"white",
                                zIndex:999,
                                followSpeed:1.5,
                                scale:2.5,
                                mixBlendMode:"difference"
                            }}
                        >
                            <a href={item.link} 
                            className='inline-block py-2 text-sm px-3 uppercase'>
                                {item.title}
                            </a>
                        </UpdateFollower>
                    </li>
                ))}
                <UpdateFollower
                mouseOptions={{
                    backgroundColor:"white",
                    zIndex:999,
                    scale:2.5,
                    followSpeed:1.5,
                    mixBlendMode:"difference"
                }}
                >
                    <button className='text-xl ps-14'>
                        <SlEarphones />
                    </button>
                </UpdateFollower>
            </ul>
        </div>
        {/* mobile hamburger section */}
        <div className='md:hidden'>
            <IoMdMenu  className='text-4xl'/>
        </div>

            </motion.nav>
        </div>
    </>
  )
}

export default Navbar