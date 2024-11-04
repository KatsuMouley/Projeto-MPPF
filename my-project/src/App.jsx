import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Description from './components/Hero/Description'
import About from './components/Article/AboutSection'
import Article from './components/Article/ArticleSection'


const App = () => {
  return (
    <main className="">
        <Navbar/>
        <Hero/>
        <Description/>
        <Article/>
        <About/>
    </main>
  )
}

export default App