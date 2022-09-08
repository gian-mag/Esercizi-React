import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';

function App() {
  return (
    <div>
    <CustomNavbar></CustomNavbar>
    <WarningSign variant="danger"></WarningSign>
    <MyBadge title="Non serve a nulla" color="primary"></MyBadge>
    <BookList></BookList>
    <Footer></Footer>
    </div>
  );
}

export default App;
