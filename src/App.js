import './App.css';
import Aside from "./components/Aside/Aside.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App(props) {



  return (

    <BrowserRouter>
        <div className="App">
            <HeaderContainer/>
            <div className="wrapperMain">
                <Aside/>
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer />}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/login" element={<Login/>}/>

                </Routes>
            </div>
            <footer></footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
