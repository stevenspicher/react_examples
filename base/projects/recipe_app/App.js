import Navbar from './components/Navbar';
import Home from './components/Home';
import info from './components/data.jsx';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Navbar title="Broccoli Beef" image={info[0].link}/>
      <div className="content">
        <Home info={info} />
      </div>
      <div className="footer">
      <Footer info={info[1].link}/>
      </div>
    </div>
  );
}

export default App;