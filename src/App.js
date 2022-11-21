import './App.css';
import Header from "./components/Header/Header.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(props) {



  return (

    <BrowserRouter>
        <div className="App">
            <Header/>
            <div className="wrapperMain">
                <Aside state={props.state.Sidebar}/>
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs state={props.state.DialogsPage}/>}/>
                    <Route path="/profile" element={<Profile
                        profilePage={props.state.ProfilePage}
                        dispatch={props.dispatch}/>}
                    />
                </Routes>
            </div>
            <footer></footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
