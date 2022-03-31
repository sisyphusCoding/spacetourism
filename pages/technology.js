


const Technology = () => {
  return (

    <div>s
        <div className= {crew.bodyWrap} >

<section className={crew.content} >
        <div className={crew.left}>

            <div className={crew.text} ><span>02</span>Meet your crew member</div>

            <h3>{role[person]}</h3>
            <h1>{name[person]}</h1>
            <p>{description[person]}</p>

            <section>
                {name.map((item, index) => (
                    <span onClick={()=>{setPerson(index)}}  style= { person === index ? {background: 'white'} : {background: 'rgba(255,255,255,.7)'}  }       ></span>
                ))}
            </section>
         
        </div>
        <div className={crew.right}> 
                    
        <div className={crew.imgWrap}  >
            <Image src={imgs[person]} alt={name[person]}  layout="responsive" />
            </div>
        </div>
      </section>  
        
    </div>
    </div>

  )
}

export default Technology