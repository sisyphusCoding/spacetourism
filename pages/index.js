
import home from '../styles/home.module.sass'



export default function Home() {
  return (
    
    <div className={home.bodyWrap}>
      <section className={home.content} >
        <div className={home.left}>
          <h4>SO, YOU WANT TO TRAVEL TO</h4>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className={home.right}> 
        <span><h3>EXPLORE</h3></span>
        
        </div>
      </section>  
    </div>
    
  )
}
