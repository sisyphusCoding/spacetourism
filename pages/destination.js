
import dest from '../styles/destination.module.sass'
import moon from '../images/destination/image-moon.webp'
import mars from '../images/destination/image-mars.webp'
import europa from '../images/destination/image-europa.webp'
import titan from '../images/destination/image-titan.webp'



import { useState } from 'react'

import Image from 'next/image'

const Destination = () => {


    const [which, setWhich] = useState(0)


    const planets =['MOON','MARS','EUROPA','TITAN']

    const description =["See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites." , "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!" , "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin." , "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."]
    const imgs = [moon , mars , europa , titan ]
    const dist = ['384,400 km' , '225 MIL. km' , '628 MIL. km' , '1.6 BIL. km']
    const time = ['3 Days' , '9 MONTHS' , '3 YEARS' , '7 YEARS' ]


  return (
    <div className= {dest.bodyWrap} >

<section className={dest.content} >
        <div className={dest.left}>
          <div className={dest.text} ><span>01</span>Pick your destination</div>
          
          <div className={dest.imgWrap}  >
                <Image src={imgs[which]} alt={planets[which]} layout='responsive' />
          </div>
        </div>
        <div className={dest.right}> 

        <div className={dest.topR} >
            {planets.map((planet,index) => (
                <div key={index} onClick={() => setWhich(index)} style={which === index? {borderBottom: '1px solid white'} : {borderBottom: '1px solid rgba(0,0,0,0)'}   } >
                    {planet}
                </div>
            ))}
        </div>

       <h1>{planets[which]}</h1>         

       <p>{description[which]}</p>


       <div className={dest.bottomR}>

         <div className={dest.bottomR_left}>
             <h5>AVG. DISTANCE</h5>
             <h3>{dist[which]}</h3>      
         </div>

         <div className={dest.bottomR_right}>
         <h5>Est. travel time</h5>
          <h3>{time[which]}</h3>      
         </div>

       </div>

    
        </div>
      </section>  
        
    </div>
  )
}

export default Destination