import './App.css';
import Header from "./components/Header/Header.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
        <div className="App">
            <Header/>
            <div className="wrapperMain">
                <Aside/>
                <Routes>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
            <footer></footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
