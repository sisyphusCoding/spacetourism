
import crew from '../styles/crew.module.sass'
import { useState } from "react"


import crew0 from "../images/crew/image-douglas-hurley.webp"
import crew1 from "../images/crew/image-mark-shuttleworth.webp"
import crew2 from "../images/crew/image-victor-glover.webp"
import crew3 from "../images/crew/image-anousheh-ansari.webp"

import { motion , AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Crew = () => {


  const [person, setPerson] = useState(0)

  const imgs = [crew0, crew1, crew2, crew3]
  const role = ['Commander' , 'Mission Specialist' , 'PILOT' , 'Flight Engineer']
  const name = ['Douglas Hurley' , 'MARK SHUTTLEWORTH' , 'Victor Glover' , 'Anousheh Ansari' ]
  const description = ["Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2." , "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist." , "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. " , "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "]



  return (
    <div>
      <div className= {crew.bodyWrap} >

        <section className={crew.content} >
          <div className={crew.text} ><span>02</span>Meet your crew member</div>      
          <div className={crew.left}>
          <AnimatePresence exitBeforeEnter> 
            <motion.div
              key={person} initial="pageInitial" animate="pageAnimate"
              variants={{
                pageInitial: {
                  y : '-10vh' ,

                  opacity: '0',
                },
                pageAnimate: {
                  y : '0vh' ,

                  opacity: '1',
                  transition: {
                    delay: .5 ,
                    staggerChildren: 1
                  }
                },
              }} 
            >
              <h3>{role[person]}</h3>
              <h1>{name[person]}</h1>
              <p>{description[person]}</p>
            </motion.div> 
            </AnimatePresence>             
            <section>
              {name.map((item, index) => (
                <span key={index} onClick={()=>{setPerson(index)}}  style= { person === index ? {background: 'white'} : {background: 'rgba(255,255,255,.2)'}  }       ></span>
              ))}
            </section>

          </div>
          <div className={crew.right}> 
            <AnimatePresence exitBeforeEnter>
              <motion.div className={crew.imgWrap}
                key={person} initial="pageInitial" animate="pageAnimate"
                variants={{
                  pageInitial: {
                    y : '10vh' ,

                    opacity: '0',
                  },
                  pageAnimate: {
                    y : '0vh' ,

                    opacity: '1',
                    transition: {
                      delay: .5 ,
                      staggerChildren: 1
                    }
                  },
                }} 

              >
                <Image src={imgs[person]} alt={name[person]}  layout="responsive" />
              </motion.div>
            </AnimatePresence>            
          </div>
        </section>  

      </div>
    </div>
  )
}

export default Crew
