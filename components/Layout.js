import layout from '../styles/layout.module.sass'

import NavBar from './NavBar'





const Layout = ({children , router }) => {



  return (
    <div className={layout.layout}  > 
      <section className={layout.navbar} >
        <NavBar />
      </section>
      <main className={layout.page}>
        {children}
      </main>
    </div>
  )
}

export default Layout
