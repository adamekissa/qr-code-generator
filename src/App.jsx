import { useState } from 'react'
import QRCode from 'qrcode';
import './App.css'

function App() {
  const [qrList, setQrList] = useState([])
  const [searchUrl, setSearchUrl] = useState([]);

  function handleChange(event) {
    setSearchUrl(event.target.value);
  }

  function generateQR() {
    QRCode.toDataURL(searchUrl, function (err, searchUrl) {
      setQrList([searchUrl, ...qrList])

    });
  }
  return (
    <>
      <div className='container-div'>
        <h3>Welcome to the QR code generator by Mohammed</h3>
        Url: <input onChange={handleChange} className='input-element' type='text'></input>
        <br />
        <button onClick={generateQR} className='generate-button'>Generate QR Code</button>
        <br />
        {qrList.map((element) => (<img src={element} alt="Hello" />))}
      </div>
    </>
  )
}

export default App
