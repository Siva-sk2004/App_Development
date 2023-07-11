import {  Routes, Route, BrowserRouter} from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./Login";

function App() {
  return (
    <div className="App">
     {/* <RegistrationPage /> */}
     {/* <Main /> */}
     {/* { <LoginPage /> */}
     <BrowserRouter> 
     <Routes>
      <Route path="/" element={<LoginPage/> }/>
      <Route path="Home" element={<RegistrationPage/> }/>
      </Routes>
      
      </BrowserRouter>   
      
    </div>

  );
}

export default App;