import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

const App = () => {
  function clickMe(){
    console.log("action done");
  }



  return (
    // <div className="container">
    //   {/* <Header />
    //   <Footer />
    //   <Body></Body> */}
    //   <div className="header"><Header /></div>
    //   <div className="body"><Body /></div>
    //   <div className="footer"><Footer /></div>
    // </div>
    <div className="container">
      <div className="Header"><Header></Header></div>
      <div className="Body"><Body fun={clickMe}></Body></div>
      <div className="Footer"><Footer></Footer></div>
    
    </div>
  )
}

export default App