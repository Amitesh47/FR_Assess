import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Search from "./Components/Search/Search";
import ImageGrid from './Components/ImageGrid/ImageGrid'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <ImageGrid/>
    </div>
  );
}

export default App;
