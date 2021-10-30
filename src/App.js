import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import BodyContent from './components/body_content';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <BodyContent />
      <Footer/>
    </div>
  );
}

export default App;
