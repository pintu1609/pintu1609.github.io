import React from 'react'
import Navbar from '../container/Navbar';
import HomeItem from '../container/HomeItem';
import Footer from '../container/Footer';
import SkillsItem from '../container/SkillsItem';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeItem/>
        <SkillsItem/>
        <Footer/>
        
       
    </div>
  )
}

export default Home