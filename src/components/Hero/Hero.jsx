import React from 'react'
import headphone1 from '../../assets/icons/headphone.png'
import headphone2 from '../../assets/icons/headphone2.png'
import headphone3 from '../../assets/icons/headphone3.png'
import { FaWhatsapp } from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'


const fadeUp = (delay)=>{
    return{
          hidden:{
            opacity:0,
            y:100,
            scale:0.5,
        },
        show:{
            opacity:1,
            y:0,
            scale:1,
            transition:{
                duration:0.5,
                delay:delay,
                ease:easeInOut,
            },
        },
        exit:{
            opacity:0,
            y:100,
            scale:0.5,
            transition:{
                duration:0.2,
                ease:easeInOut,
            }
        }
    }
}

const HeadphoneData =[
{
    id:1,
    image: headphone1,
    title:"Headphone Wireless",
    subtitles:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae praesentium necessitatibus odio debitis odit inventore dolorum quidem quos maiores ratione, cupiditate quas molestias voluptatem voluptatibus",
    price:'$100',
    modal:"Modal Brown",
    bgColor:"#8b5958",
},
{
    id:2,
    image:headphone2,
    title:"Headphone Wireless",
    subtitles:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae praesentium necessitatibus odio debitis odit inventore dolorum quidem quos maiores ratione, cupiditate quas molestias voluptatem voluptatibus",
    price:'$200',
    modal:"Lime Green",
    bgColor:"#638153",
},
{
    id:3,
    image:headphone3,
    title:"Headphone Wireless",
    subtitles:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae praesentium necessitatibus odio debitis odit inventore dolorum quidem quos maiores ratione, cupiditate quas molestias voluptatem voluptatibus",
    price:'$300',
    modal:"Ocean Blue",
    bgColor:"#5d818c",
},
];


const Hero = () => {
    const [activeData, setActiveData] = React.useState(HeadphoneData[2])

    const handleActiveData = (data) =>{
        setActiveData(data)
    }
   

  return (

    <>
    <section className='bg-brandDark text-white font-varela'>
        <div className="container grid grid-cols-2 md:grid-cols-2 min-h-[700px]">

            {/* -----brand info------ */}

            <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                <div className='space-y-5 text-center md:text-left'>
                    <AnimatePresence mode='wait'>
                        <UpdateFollower>
                            <motion.h1 
                            // style={{color:activeData.bgColor}} 
                                className='text-3xl lg:text-6xl font-bold font-varela'
                                key={activeData.id}
                                variants={fadeUp(0.2)}
                                initial='hidden'
                                animate='show'
                                exit="exit">
                                {activeData.title}
                            </motion.h1>
                        </UpdateFollower>
                    </AnimatePresence>
                    <p style={{color:activeData.bgColor}} className='text-sm leading-loose text-white/80'>{activeData.subtitles}</p>
                    <button style={{
                        backgroundColor:activeData.bgColor
                    }} className='px-4 py-2 inline-block font-normal rounded-sm'>Buy and Listen</button>

                    {/* ----headphone list seperator-------- */}

                    <div className='flex items-center md:justify-start gap-4 !mt:24'>
                        <div className='w-20 h-[1px] bg-white'></div>
                        <p className='uppercase text-sm'>Top Headphones for you</p>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>

                    {/* -----headphone list switcher----- */}

                    <div className='grid grid-cols-3 gap-5'>
                        {HeadphoneData.map((item)=>{
                            return(
                                <>
                                <div key={item.id } 
                                        onClick={()=>{handleActiveData(item)}}
                                        className='grid grid-cols-2 place-items-center cursor-pointer'>
                                    <div>
                                        <img src={item.image} alt="" className='w-[200px]' />
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='font-bold text-base'>{item.price}</p>
                                        <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* -----hero image------ */}
            <div className='flex flex-col justify-end items-center '>
                <img src={activeData.image} alt="" 
                className='w-[300px] md:w-[400px] xl:w-[550px]'/>
            </div>
            {/* -----whatsapp icon------ */}
            <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg]    duration-1000 z-[9999] mix-blend-difference'>
                <a href="">
                    <FaWhatsapp  />
                </a>
            </div>
        </div>
            
    </section>
    </>
  )
}

export default Hero