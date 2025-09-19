import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Counter from './components/Counter'
import ComplexArray from './components/ComplexArray'
import ComplexObject from './components/ComplexObject'
import SignupForm from './components/SignupForm'
import ConditionalRendering from './components/ConditionalRendering'

function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <Counter />
      <ComplexArray /> */}
      <ComplexObject /> 
      {/* <SignupForm /> */}
      {/* <ConditionalRendering /> */}
    </>
  )
}

export default App
