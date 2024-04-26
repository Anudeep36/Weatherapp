// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const  App = () =>{
  const [city,setCity]=useState('')
  const [result,setResult]= useState('')
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa8584e94ecb10ea0fc76a344f12133b`)
      .then(response => response.json())
      .then(data => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        setResult("Temperature at" + " " +'\n'+ city+':'+(Math.round(celsius))+"ºc");
        setCity('');
      })
      .catch(error => console.error(error.message));
  }
    
  

  return (
    <div className="App">
      <div className='card'>
        <div className='card-body'></div>
        <h3>Weather</h3>
        <form onSubmit={submitHandler}>
        <input type="text" className='city' value={city} onChange={changeHandler}></input> <br></br> <br/>
        <input type='submit'className="sub" value="Get Tempetarue" ></input>
        </form>
        <h2>{result}</h2>
      </div><br/>
      <h6>Created by ANUDEEP</h6>
    </div>
  );
}

export default App;
