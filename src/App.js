import './App.css';
import Header from "./components/Header/Header.jsx";
import Aside from "./components/Aside/Aside.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {



  return (

    <BrowserRouter>
        <div className="App">
            <Header/>
            <div className="wrapperMain">
                <Aside/>
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer />}/>
                    <Route path="/users" element={<UsersContainer/>}/>

                </Routes>
            </div>
            <footer></footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
