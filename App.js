import './App.css';
import Landing from './components/landing';
import Poster from './components/poster';
// import Testinomial from './components/testinomial';


function App() {
  return (
    <div className='Background'>
      <Poster />
      <Landing />
      {/* <Testinomial /> */}
    </div>
  );
}

export default App;
