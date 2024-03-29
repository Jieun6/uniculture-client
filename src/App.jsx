import {Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Chat from './pages/Chat/Chat';
import './App.css'
import "./styles/font.css";
import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/Profile/ProfileEdit';
import ProfileInfo from './pages/Profile/ProfileInfo';
import ProfileDelete from './pages/Profile/ProfileDelete';
import Friend from './pages/Friend/Friend';
import AddBoard from "./pages/AddBoard/AddBoard";
import Board from "./pages/Board/Board";
import EditBoard from "./pages/EditBoard/EditBoard";

function App() {

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/friend" element={<Friend />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:nickname" element={<Profile />} />
            <Route path="/accounts/edit" element={<ProfileEdit />} />
            <Route path="/accounts/personal-info" element={<ProfileInfo />} />
            <Route path="/accounts/delete" element={<ProfileDelete />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/add-board" element={<AddBoard/>} />
            <Route path="/board/:board_id" element={<Board/>} />
            <Route path="/:board_id" element={<EditBoard/>} />
          </Routes>
        </BrowserRouter>
      </>

  );
}

export default App;
