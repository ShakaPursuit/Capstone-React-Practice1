import { useState } from 'react'


import Header from './Components/Header'
import Footer from './Components/Footer'
import GetQuote from './Components/Api'
import Main from './Components/Main'
import './App.css'

function App() {
  const [quote,setQuote] = useState(null)

  return (
    
    <div className='app'>
      <Header/>
      {/* <br></br> */}
      <GetQuote setQuote={setQuote}/>
      {/* <br></br> */}
      <Main quote={quote}/>
      <Footer/>
        
    </div>
      
   
  )
}

export default App
