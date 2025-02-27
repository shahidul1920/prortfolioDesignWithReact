import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ExpNedu from '../components/ExpNedu'
import Portfolio from '../components/Portfolio'
import ExpertAreas from '../components/ExpertAreas'
import FormSec from '../components/FormSec'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ExpNedu />
      <Portfolio />
      <ExpertAreas />
      <FormSec />
    </div>
  )
}
