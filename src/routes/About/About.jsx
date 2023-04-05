import React from 'react'
import { AboutContent } from '../../components/aboutContent/AboutContent'
import Footer from '../../components/footer/Footer'
import Hero2 from '../../components/heroImg2/Hero2'
import Nav from '../../components/nav/Nav'

export default function About() {
  return (
    <>
    <Nav/>
    <Hero2 hading="ABOUT" text="Im a friendly front-End Developer."/>
    <AboutContent/>
    <Footer/>
    </>
  )
}
