import { useState , useEffect } from 'react'
import './App.css'
import axios from 'axios'; 
import logo from './assets/img/logo.png'


function App() {

  const [isConexion, setIsConexion] = useState({});

  useEffect(() => {

    const idNumber = Math.floor(Math.random() * 125 + 1);

    axios.get(`https://rickandmortyapi.com/api/location/${idNumber}`)
      .then(res => setIsConexion(res.data));



  },[]);

  console.log(isConexion);


  return (
    <div className="App">
      
      <div className="header">
        <div className="logo-box">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>

      <div className="info-box">
          <div className="item-info-1">
            <h3>type: {isConexion.type}</h3>
          </div>
          <div className="item-info-2">
            <h1>{isConexion.name}</h1>
            <h3>dimension: {isConexion.dimension}</h3>
          </div>
          <div className="item-info-3">
            <h3> population: {isConexion.residents?.length}</h3>
          </div>
      </div>

      <div className="search-box">
        <input type="text" className="search" placeholder='type a location id'/>
        <button className="search-btn">Search</button>
      </div>
    
    </div>
  )
}

export default App
