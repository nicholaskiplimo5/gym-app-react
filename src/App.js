import Footer from './components/Footer';
import Hero from './components/Hero';
import Join from './components/Join';
import Plans from './components/Plans';
import Program from './components/Program';
import Reason from './components/Reason';
import Testimonials from './components/Testimonials';
import './custom/style.css'
function App() {
  return (
    <div className="app">
      <Hero/>
      <Program/>
      <Reason/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
