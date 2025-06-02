import React from 'react'
import headphone1 from '../../assets/icons/headphone.png'
import headphone2 from '../../assets/icons/headphone2.png'
import headphone3 from '../../assets/icons/headphone3.png'

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
    price:'$100',
    modal:"Lime Green",
    bgColor:"#638153",
},
{
    id:3,
    image:headphone3,
    title:"Headphone Wireless",
    subtitles:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae praesentium necessitatibus odio debitis odit inventore dolorum quidem quos maiores ratione, cupiditate quas molestias voluptatem voluptatibus",
    price:'$100',
    modal:"Ocean Blue",
    bgColor:"#5d818c",
},
];


const Hero = () => {
    const [activeData, setActiveData] = React.useState(HeadphoneData[0])
   

  return (

    <>
    <section className='bg-brandDark text-white'>
        <div className="container grid grid-cols-2 md:grid-cols-1 min-h-[541px]">
            {/* -----brand info------ */}
            <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                <div className='space-y-5 text-center md:text-left'>
                    <h1 className='text-3xl lg:text-6xl font-bold font-varela'>
                        {activeData.title}
                    </h1>
                    <p className='text-sm leading-loose text-white/80'>{activeData.subtitles}</p>
                    <button style={{
                        backgroundColor:activeData.bgColor
                    }} className='px-4 py-2 inline-block font-normal rounded-sm'>Buy and Listen</button>
                    {/* ----headphone list seperator-------- */}
                    <div className='flex items-center md:justify-start gap-4'>
                        <div className='w-20 h-[1px] bg-white'></div>
                        <p className='uppercase text-sm'>Top Headphones for you</p>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>
                </div>
            </div>
            {/* -----hero image------ */}
            {/* -----whatsapp icon------ */}
            
        </div>
    </section>
    </>
  )
}

export default Hero