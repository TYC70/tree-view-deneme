import './App.css';
import Menu from "./components/Menu";

function App() {
  
  return (
    <div className="App">
      <a className='github-link'
        href='https://github.com/TYC70/tree-view-deneme.git' target="_blank">OPEN GITHUB REPOSITORY</a>
      <div className='main-section'>
        <h1>Welcome to the Tree View App</h1>
        <button className='menu-button'>MENU</button>
      </div>
      <p className='alert-section'>There is no tree to show</p>
    </div>
  );
}

export default App;
