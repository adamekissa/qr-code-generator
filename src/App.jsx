import { useState } from 'react'
import QRCode from 'qrcode';
import './App.css'

function App() {
  const [qrList, setQrList] = useState([]);
  const [searchUrl, setSearchUrl] = useState([]);
  const limitedArray = qrList.slice(0, 5);

  function handleChange(event) {
    setSearchUrl(event.target.value);
  }

  function resetQRCodeList() {
    setQrList([]);
  }

  function generateQR() {
    console.log("number ", searchUrl.length);
    if (searchUrl.length === 0) {
      alert("Please enter a valid URL");
    } else {
      QRCode.toDataURL(searchUrl, function (err, searchUrl) {
        setQrList([searchUrl, ...qrList]);
      });
    }
  }
  return (
    <>
      <div className='container-div'>
        <h3>Welcome to the QR code generator by Mohammed</h3>
        Url: <input id='hr' onChange={handleChange} className='input-element' type='text' required ></input>
        <br />
        <button onClick={generateQR} className='generate-button'>Generate QR Code</button>
        <br />
        <h3> Last five(5) searches </h3>
        <br />
        {limitedArray.map((element) => (<img src={element} key={element + Math.floor(Math.random() * 1000)} alt="QR-Code" />))}
        <br />
        <button className='generate-button' onClick={resetQRCodeList}>Clear search</button>
      </div>
    </>
  )
}

export default App
