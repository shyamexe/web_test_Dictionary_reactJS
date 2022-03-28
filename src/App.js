
import './App.css';
import HomeView from './HomeView/HomeView';
import Social from './Social/Social';


function App() {
  return (
    <div className="App">
      <div className='social'>
        <Social/>
      </div>
      <HomeView className='home'/>
      
    </div>
  );
}

export default App;
