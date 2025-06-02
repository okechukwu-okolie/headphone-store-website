import React from 'react'
import headphone1 from '../../assets/icons/headphone.png'
import headphone2 from '../../assets/icons/headphone2.png'
import headphone3 from '../../assets/icons/headphone3.png'

const HeadphoneData =[
{
    id:1,
    image:Headphone1,
    title:"Headphone Wireless",
    subtitles:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae praesentium necessitatibus odio debitis odit inventore dolorum quidem quos maiores ratione, cupiditate quas molestias voluptatem voluptatibus",
    price:'$100',
    modal:"Modal Brown",
    bgColor:"#8b5958"
},{
    id:1,
    image:Headphone1,
    title:"Headphone Wireless",
    subtitles:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae praesentium necessitatibus odio debitis odit inventore dolorum quidem quos maiores ratione, cupiditate quas molestias voluptatem voluptatibus",
    price:'$100',
    modal:"Lime Green",
    bgColor:"#638153"
},
{
    id:1,
    image:Headphone1,
    title:"Headphone Wireless",
    subtitles:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae praesentium necessitatibus odio debitis odit inventore dolorum quidem quos maiores ratione, cupiditate quas molestias voluptatem voluptatibus",
    price:'$100',
    modal:"Ocean Blue",
    bgColor:"#5d818c"
},
]
const Hero = () => {
    const [activeData, setActiveData] = React.useState(HeadphoneData[0])

  return (

    <>
    <section className='bg-brandDark text-white'>
        <div className="container grid grid-cols-1 md:grid-cols-1 min-h-[700px]">
            {/* -----brand info------ */}
            <div>
                <h1>{activeData.title}</h1>
            </div>
            {/* -----hero image------ */}
            {/* -----whatsapp icon------ */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae praesentium necessitatibus odio debitis odit inventore dolorum quidem quos maiores ratione, cupiditate quas molestias voluptatem voluptatibus, id exercitationem eveniet distinctio omnis!</p>
        </div>
    </section>
    </>
  )
}

export default Hero