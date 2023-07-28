import Login from "./Components/Login/Login";
import SignUp from "./Components/signUp/SignUp";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Gallery from "./Components/Gallery/Gallery";

import PublicLayout from "./Components/Layout/PublicLayout";
import PrivateLayout from "./Components/Layout/PrivateLayout";

function App() {
  return (
   <>


   <BrowserRouter>
  <Routes>
    <Route path='/' element={<PublicLayout/>}>
      <Route index element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Route>

    <Route path='/gallery' element={<PrivateLayout/>}>
      <Route index element={<Gallery/>}/>
    </Route>
  </Routes>

   </BrowserRouter>
  
   </>
  );
}

export default App;
