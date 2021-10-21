import { useState } from 'react';
import axios from 'axios';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

function App() {
    const [city, setCity] = useState("");
    //[]内のcityがstate、setCityがstateにデータを書き込んだり操作する仕組み。setCityを使うことでcity内のデータを操作できる。
    const [results, setResults] = useState({ //最初は空にしておく
        country: "",
        cityName: "",
        temperature: "", 
        conditionText: "",
        icon: ""
    });
    const getWeather = (e) => { 
        e.preventDefault();
        axios.get(`https://api.weatherapi.com/v1/current.json?key=615c52eeef524283bb603235210710&q=${city}&aqi=no`) //受け取る天気のAPIのURL 
             .then(res => { //.thenはAPIにデータを送った後の処理。resの中にAPIから送り返されたデータが入っている。
                setResults({
                    country: res.data.location.country,
                    cityName: res.data.location.name,
                    temperature: res.data.current.temp_c,
                    conditionText: res.data.current.condition.text,
                    icon: res.data.current.condition.icon
                })
             })
    }
    return (
      <div className="wrapper">
          <div className="container">
              <Title />
              <Form getWeather={getWeather} setCity={setCity} />
              <Results results={results} />      
          </div>
      </div>
    );
  };
  
  export default App;