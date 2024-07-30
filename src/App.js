import './App.css';
import HeroSection from './components/Hero';
import NavBar from './components/NavBar';

const App = ()=> {
  return (
    <div className="App">
       <NavBar/>
       <HeroSection/>
    </div>
  );
}

export default App;
