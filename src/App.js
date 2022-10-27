import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import About from './components/about/about';
import { Services } from './components/services/Services';
import { Resume } from './components/resume/Resume';
import { Portfolio } from './components/portfolio/Portfolio';
import { Contact } from './components/contact/Contact';

function App() {
  return (
   <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Contact />

    </main>
   </>
  );
}

export default App;
