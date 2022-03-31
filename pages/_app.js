
import '../styles/global.sass'


import Layout from '../components/Layout'
import { motion, AnimatePresence } from "framer-motion"


function MyApp({ Component, pageProps , router }) {


  return (
<Layout>
<AnimatePresence >

  <motion.div
  key={router.route} initial="pageInitial" animate="pageAnimate" 
    variants={{
      pageInitial: {
        opacity: 0, x: 100,
        transition: {
          staggerChildren: 1,
          delay: .2,
          
        }
      },
      pageAnimate: {
        opacity: 1, x: 0,
        transition: {
          staggerChildren: 1,
          
        }
       
      },
      exit: {
        opacity: 0, x: -300,
        transition: {
          staggerChildren: 1 ,
        }
      },

    }   }


  >

      <Component {...pageProps} />

  </motion.div></AnimatePresence>
  </Layout>

)
}



export default MyApp
