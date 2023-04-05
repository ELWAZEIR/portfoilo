import React from 'react'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/heroImg/Hero'
import Nav from '../../components/nav/Nav'
import Work from '../../components/work/work'

export default function Home() {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Work/>
        <Footer/>
    </div>
  )
}
