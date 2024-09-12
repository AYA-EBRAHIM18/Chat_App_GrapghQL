
import {Routes,Route, Navigate} from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './pages/home/home.jsx';
import { Login } from "./pages/login/login.jsx";
import { SignUp } from "./pages/signUp/signUp.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser}=useAuthContext()

  return (
    <>
     <div className="p-4 h-100 d-flex align-items-center justify-content-center">
     <Routes>
<Route path='/' element={authUser ?  <Home/> : <Navigate to={'/login'} /> }/>
<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>}/>
<Route path='/signUp' element={authUser ? <Navigate to='/' /> : <SignUp/>}/>
      </Routes>
      <Toaster/>
     </div>
    </>
  )
}

export default App
