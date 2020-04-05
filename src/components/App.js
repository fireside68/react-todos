import React from 'react'
// import MainContent from './MainContent'
// import Navbar from './Navbar'
// import Footer from './Footer'
import Joke from './Joke'

function App() {
  return (
    <div>
      <Joke question="Why did the chicken cross the road?"
        punchLine="To get to the other side"/>
      <br/>
      <Joke punchLine="I used to do drugs. I still do, but I used to, too."/>
    </div>
  )
}

export default App