import React from 'react'
import Hero from './components/Hero'
import Search from './components/Search'
import Packages from './pages/admin/packages/Packages'
import Flightss from './pages/admin/flight/Flightss'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Search/>
        <Packages/>
        { <Flightss/> }
    </div>
  )
}

export default Home