import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputBox from './components/InputBox';
import { useState } from 'react';


import axios from './axios/axios'
import requests from './axios/axiosReq'


function App() {
  const [encryptStr , setEncryptStr] = useState("");
  const [decryptStr , setDecryptStr] = useState("");
  const [isLoading , setIsLoading] = useState(false)

  const handleEncryption = async() => {
    setIsLoading(true)
    axios.post(requests.postEncrypt , {
      input : encryptStr
    }).then((res) => {
      const output = res.data.output;
      setDecryptStr(output);
      setIsLoading(false)
    }).catch(err => {
      console.log(err)
      setDecryptStr("Server Side Error");
      setIsLoading(false)
    })
  }

  const handleDecryption = async() => {
    setIsLoading(true)
    axios.post(requests.postDecrypt , {
      input : decryptStr
    }).then((res) => {
      const output = res.data.output
      setEncryptStr(output)
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
      setEncryptStr("Server Side Error");
      setIsLoading(false);
    })
  }

  return (
    <div className="App vh-100 mx-auto">
      <h1>Welcome TTT - Task</h1>
      
      <div className="container mx-auto system-box mt-5"> 
        <div className="encode-box mx-auto">
          <button className="btn btn-primary run-btn btn-lg" onClick= {handleEncryption} >Encrypt  </button>
          <InputBox  
            data = {encryptStr}
            setData = {setEncryptStr}
          />
        </div>
        
        <div className="decode-box mx-auto">
          <button className="btn btn-primary run-btn btn-lg" onClick = {handleDecryption} >Decrypt</button>
          <InputBox 
            data = {decryptStr}
            setData = {setDecryptStr}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
