import './App.css';
import { Hero } from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import ParticlesComponent from './components/Particles/Particles';

function App() {
  return (
    <>
    <ParticlesComponent id="particles"/>
    <Navbar/>
    <Hero/>
    </>
  );
}

export default App;