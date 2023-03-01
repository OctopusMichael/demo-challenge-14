import React, { useState } from 'react';
import Header from "./components/Header"
import Cards  from "./components/Cards"
import Footer from "./components/Footer"
import "./style/App.css"


function App() {
  
  const [data, setData] = useState([
    {
    id: 1,
    title: " Supervisor",
    description: " Monitors activity to identify project roadblocks",
    icon: "icon iconSupervisor",
    color: "ColorSupervisor",
    section: " card card1 col-12 col-md-4 "
  },
    {
    id: 2,
    title: "Team Builder",
    description: "Scans our talent network to create the optimal team for your project",
    icon: "icon iconTeam",
    color: "ColorTeam",
    section: "card card2 col-12 col-md-4  ",
  
  },
  {
  id: 3,
  title: "Calculator",
  description: "Uses data from past projects to provide better delivery estimates",
  icon: "icon iconCalculator",
  color: "ColorCalculator",
  section: " card card3 col-12 col-md-4 ",

},
    {
    id: 4,
    title: " Karma",
    description: "  Regularly evaluates our talent to ensure quality",
    icon: "icon iconKarma",
    color: "ColorKarma",
    section: "card card4 col-12 col-md-4 ",

  }


]);
  

  return (
    <> 
      <Header/>
      <Cards data={data}  />
      <Footer/>
    </>
  )
}

export default App
