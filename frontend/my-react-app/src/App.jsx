import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { Pay } from "./pages/Pay";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element ={<Home/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/pay" element={<Pay />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
