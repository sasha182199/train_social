import './App.css';
import Header from "./components/Header/Header.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Profile from "./components/Profile/Profile.jsx";

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
