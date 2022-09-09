import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WeatherApp from './components/WeatherApp';
import { BrowserRouter, Routes, Route } from "react-router-dom";


  const App = () => (
    <div>

      <NavBar />
      <WeatherApp />
      <Footer />

    </div>
  );


export default App;
