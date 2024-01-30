
import './App.css';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import History from './Components/History';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import OurProduct from './Components/OurProduct';
import Profile from './Components/Profile';

function App() {
  return (
    <>
    
    <Navbar/>
    <HomePage/>
    <History/>
    <Profile/>
    <ContactUs/>
    <Footer/>
    {/* <OurProduct/> */}
    </>
  );
}

export default App;
