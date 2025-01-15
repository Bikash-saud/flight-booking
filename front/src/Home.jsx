import React from 'react'
import Hero from './components/Hero'
import Search from './components/Search'
import Flightss from './pages/admin/flight/Flightss'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Search/>
        <Flightss/>
    </div>
  )
}

export default Home