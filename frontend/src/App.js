import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import backgroundImage from './images/background.png';

function App() {
  console.log('Background image:', backgroundImage);
  
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed', 
      backgroundRepeat: 'no-repeat', 
      minHeight: '100vh'
    }}>
      <div className="container">  {/* Fixed: Changed from "Continainer" to "container" */}
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;