import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Counter />
    </>
  )
}

export default App
