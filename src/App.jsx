import { useState , useEffect } from 'react'
import './App.css'
import axios from 'axios'; 
import logo from './assets/img/logo.png'
import ResidenInfo from './components/ResidenInfo';


function App() {

  const [isConexion, setIsConexion] = useState({});
  const [residents, setResidents] = useState([]);
  const [searchId, setSearchId] = useState("");


  useEffect(() => {

    const idNumber = Math.floor((Math.random() * 126) + 1);

    axios.get(`https://rickandmortyapi.com/api/location/${idNumber}`)
      .then(res => {setIsConexion(res.data)
                    setResidents(res.data.residents)

      })

  },[]);

  console.log(isConexion);
  console.log(residents);


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
        <input 
        type="text"
        value={searchId}
        className="search" 
        placeholder='type a location id'
        onChange={(e) => setSearchId(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="residen-box">
        {
          residents.map(resident => (

            <ResidenInfo resident={resident} key={resident.id}></ResidenInfo>

          ))

        }
      </div>

    </div>
  )
}

export default App
