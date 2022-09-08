import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './MyComponents/NavBar';
import Footer from './MyComponents/Footer';
import MovieList from './MyComponents/MovieList';


function App() {
  return (
      <div>
      <NavBar />
      <MovieList />
      <Footer />
      </div>
  );
}

export default App;
