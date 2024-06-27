import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container-div'>
        <h3>Welcome to the QR code generator by Mohammed</h3>
        Url: <input className='input-element' type='text'></input>
        <br />
        <button className='generate-button'>Generate QR Code</button>
      </div>
    </>
  )
}

export default App
