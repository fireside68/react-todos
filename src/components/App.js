import React from 'react'
import MainContent from './MainContent'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <html>
      <header><Navbar/></header>
      <body><MainContent/></body>
      <footer><Footer/></footer>
    </html>
  )
}

export default App