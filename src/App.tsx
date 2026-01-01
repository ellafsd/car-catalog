import type { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'

const App:FC= () => {
  return (
    <BrowserRouter>
    <div className='min-h-screen flex flex-col relative overflow-hidden'>

      {/* Background */}
      <div className= "fixed inset-0 bg-linear-to-br from-dark-bg via-black-100 to-dark-bg -z-10"/>
      
      {/* Background glowing light effect */}
      <div className='fixed top-20 left-20 w-72 h-72 bg-primary-blue/20 
      rounded-full blur-xl -z-10 animate-pulse' />

      <div className='fixed bottom-20 right-20 w-72 h-72 bg-accent/20 
      rounded-full blur-xl -z-10 animate-pulse'  style={{animationDelay: "1s"}}/>

      <Header />
         <main className='relative z-10 flex-1'>
           <Routes>
             <Route path="/" element={<Home />}/>
           </Routes>
         </main>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App