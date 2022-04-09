
import '../styles/global.sass'

import Head from 'next/head'


import Layout from '../components/Layout'
import { motion, AnimatePresence } from "framer-motion"


const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
}


function MyApp({ Component, pageProps , router }) {





  return (
<Layout>
<AnimatePresence exitBeforeEnter>

  <motion.div
 key={router.route}
 initial="hidden"
 animate="enter"
 exit="exit"
 variants={variants}
 transition = {{
    type: "spring", stiffness: 190 ,
 }}
  >

  
    <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;300&display=swap" rel="stylesheet"></link>
      </Head>
    

      <Component {...pageProps} />

  </motion.div></AnimatePresence>
  </Layout>

)
}



export default MyApp
