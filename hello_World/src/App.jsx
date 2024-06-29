import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainHeader from './components/moleculas/MainHeader';
import MainFooter from './components/moleculas/MainFooter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainHeader/>
      <MainFooter/>
    </>
  )
}

export default App
