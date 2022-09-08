import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
    <CustomNavbar></CustomNavbar>
    <Welcome></Welcome>
    <Footer></Footer>
    </div>
  );
}

export default App;
