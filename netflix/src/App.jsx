import React from 'react'
import Navbar from './components/navbar/Navbar'
import MainComponent from './components/maincomponent/MainComponent'
import Middle from './components/middle/Middle'
import Queries from './components/queries/Queries'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div className='main-container'>
      {/* <h2>Netflix</h2> */}
      <Navbar/>
      <MainComponent/>
      <Middle/>
      <Queries/>
      <Footer/>
    </div>
  )
}

export default App;