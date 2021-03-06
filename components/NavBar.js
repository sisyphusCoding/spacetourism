import navbar from '../styles/nav.module.sass'
import Link  from 'next/link'

import { useState ,useEffect } from 'react'


import { useRouter  } from "next/router";



const NavBar = () => {


    const router = useRouter();


        useEffect(() =>{
            const lists =[ '/' ,'/destination', '/crew', '/technology']
            const id =   lists.indexOf(router.pathname);

            setWhich(id)

        },[router.pathname])

    const [menu , setMenu] = useState(false)

    const lists =[ '/' ,'/destination', '/crew', '/technology']

    const id =   lists.indexOf(router.pathname);

    const [which,setWhich] = useState(id)

    const list =[ 'home','destination', 'crew', 'technology']



    const toggleMenu = (index) => {
        setWhich(index) 
        
        if(menu){
            setMenu(false)
        } return
    }



    
    


  
    return (
        <ul className={navbar.nav} >
            <li className={navbar.logoIMG}>
                <img src='https://i.ibb.co/cvWqH1b/logo.png' alt ="logo" />
            </li>
            <span className={navbar.line} ></span>
            <button onClick={()=>{setMenu(!menu)}} className={navbar.menu}>
                <div style={menu ? {transform: 'rotate(45deg)' , top: '50%'} : {transform: 'rotate(0)' , top: '.3vh'}  } ></div>
                <div style={menu ? { opacity: '0' , scale: '0.5``'}: {opacity: '1' ,scale: '1'}} ></div>
                <div style={menu ? {transform: 'rotate(135deg)' , top: '50%' } : {transform: 'rotate(0)' , bottom: '.3vh'}  } ></div>
            </button>   
            <section className={navbar.innerWrap}  style={ menu? { transform:'translate3d(0,0,0)' , opacity: '1' } : {transform:'translate3d(0,-100vh,0)' , opacity: '1'} }  >
           
            {list.map((item,index)=>(
                <li  style= { which === index ?  {borderBottom: '2px solid white' } :null } key={item}  >
                    <Link  href={ index == 0? `/` : `/${item}`}>
                        <div style = {{cursor: 'pointer'}}  onClick={  () => { toggleMenu(index) } }>
                        <strong > 0{index} </strong>     
                        {item}
                        </div>
                        </Link>
                </li>
                
            ))}
           
            </section>
        </ul>
  )

  
}

export default NavBar