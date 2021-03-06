
import tech from '../styles/tech.module.sass'

import { useState  } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'



import port0 from '../images/technology/image-launch-vehicle-portrait.jpg'
import port1 from '../images/technology/image-space-capsule-portrait.jpg'
import port2 from '../images/technology/image-spaceport-portrait.jpg'



import land0 from '../images/technology/image-launch-vehicle-landscape.jpg'
import land1 from '../images/technology/image-space-capsule-landscape.jpg'
import land2 from '../images/technology/image-spaceport-landscape.jpg'



const port = [port0,port1,port2]
const land = [land0,land1,land2]


const Technology = () => {

    const [which,setWhich] = useState(0) 

const techn = ['LAUNCH VEHICLE' , 'SPACEPORT' , 'SPACE CAPSULE']

const description = ["A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!" , "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch." , "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."]

  return (
    <div className={tech.bodyWrap} >
       
     <div className={tech.content} >
     <div className={tech.text} ><span>03</span>SPACE LAUNCH 101</div>
       <section className={tech.left} > 
        <div className={tech.btnWrap}>
            {techn.map((item, index) => (
                <span key={index} onClick={()=>{setWhich(index)}}     style = {which == index? {background: 'white' , color: 'black' , border: '1px solid black' } :  {background:'rgba(255,255,255,.0)' , border: '1px solid white' }}   >{index +1}</span>
            ))}

        </div>

        <motion.div className={tech.cont}

            key={which} initial="pageInitial" animate="pageAnimate"
            variants={{
            pageInitial: {
            y : '-5vh' ,
                
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

                <h3>THE TERMINOLOGY…</h3>
                <h1>{techn[which]}</h1>
                <p>{description[which]}</p>

        </motion.div>

       
       
        </section>
       <motion.section className={tech.right}


            key={which} initial="pageInitial" animate="pageAnimate"
            variants={{
            pageInitial: {
            x : '-5vh' ,
                
                opacity: '0',
            },
            pageAnimate: {
                x : '0vh' ,
                
                opacity: '1',
                transition: {
                delay: .5 ,
                staggerChildren: 1
                }
            },
}} 
       
       > 
       
       <div className={tech.imgWrap} > 

                <Image src={port[which]} alt={techn[which]} layout="responsive" />

       </div>

       <div className={tech.imgWrapland} > 

                <Image src={land[which]} alt={techn[which]} layout="responsive" />

       </div>

       
        </motion.section>
         
         
    </div>   

    </div>
  )
}

export default Technology