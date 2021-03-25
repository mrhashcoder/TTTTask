import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputBox from './components/InputBox';
import { useState } from 'react';


import axios from './axios/axios'
import requests from './axios/axiosReq'


function App() {
  const [inputStr , setInputStr] = useState("");
  const [outputStr , setOutputStr] = useState("");

  const handleEncryption = async() => {
    axios.post(requests.postEncrypt , {
      input : inputStr
    }).then((res) => {
      const output = res.data.output;
      setOutputStr(output);
    }).catch(err => {
      console.log(err)
      setOutputStr("Server Side Error");
    })
  }

  const handleDecryption = async() => {
    axios.post(requests.postDecrypt , {
      input : inputStr
    }).then((res) => {
      const output = res.data.output
      setOutputStr(output)
    }).catch(err => {
      console.log(err);
      setOutputStr("Server Side Error");
    })
  }

  return (
    <div className="App vh-100 mx-auto">
      <h1>Welcome TTT - Task</h1>
      
      <div className="container mx-auto system-box mt-5"> 
        <div className="encode-box mx-auto m-1 border-white card-body">
          <button className="btn btn-primary run-btn btn-lg" onClick= {handleEncryption} >Encrypt  </button>
          <button className="btn btn-primary run-btn btn-lg" onClick = {handleDecryption}>Decrypt  </button>
          <InputBox  
            data = {inputStr}
            setData = {setInputStr}
            placeholder = {"Input Here"}
          />
        </div>
        
        <div className="decode-box mx-auto">
          <InputBox 
            data = {outputStr}
            setData = {setOutputStr}
            placeholder={"Output Here"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
