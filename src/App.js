import './App.css';
import Blogs from './components/Blogs';


function App() {
  return (
    <div>
      <ul className="border">
      <li>Framsidan</li>
      <li>Bilder</li>
      <li>Rekommendationer</li>
      </ul>
  <h1 className="App">
    <Blogs />
  </h1>
  </div>
  );
}

export default App;