import './App.css';
import Header from "./components/Header.jsx";
import Aside from "./components/Aside.jsx";
import Profile from "./components/Profile.jsx";

function App() {

  return (

    <div className="App">
        <Header/>
        <div className="wrapperMain">
            <Aside/>
            <Profile/>
        </div>
        <footer></footer>
    </div>
  );
}

export default App;
