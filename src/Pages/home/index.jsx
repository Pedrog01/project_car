// import './styles.scss';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import connection from "../../Components/API/connection";

const SignIn = () => {
  const [car, setCar] = useState({
    name: "",
    year: ""
  }) 

  const navigate = useNavigate() 

  const advance = e => {
    e.preventDefault() 
    
    navigate(`/cars?car=${car.name}&year=${car.year}`)

    if(car.name && car.year !== "") {
      if(car.year.length >= 4) {
  
      } else {
       alert("Carro encontrado com sucesso!");
      }
  } else {
      alert("Procure pelo ano correto")
    }
  }
  

  return (
    <div className='container'>
      <h1>Pesquise seu Carro</h1>
        <div className='form'>
          <label>Nome:</label>
          <input type="text" placeholder='Audi' id='name' value={car.name} onChange={e => setCar({...car, name: e.target.value})}>
          </input>
          <label>Ano:</label>
          <input type="number" placeholder='2012' id='year' value={car.year} onChange={e => setCar({...car, year: e.target.value})}>
          </input>
        </div>
        <div className="button">
          <button type="submit" className="loginButton" onClick={e => advance(e)}>Avançar</button> 
        </div>
    </div>  
  )
  
}


export default SignIn

