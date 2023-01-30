
import Home from './pages/Homepage/Home';
import Login from './pages/Loginpage/Login';
import List from './pages/Listpage/List';
import Singlepage from './pages/Singlepage/Singlepage';
import Newpage from './pages/Newpage/Newpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { productInputs, userInputs } from './formSource';

import './Style/dark.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />}></Route>
              <Route path=':userId' element={<Singlepage />}></Route>
              <Route path='new' element={<Newpage inputs={userInputs} title="Add New User"/>}></Route>
            </Route>
            <Route path='products'>
              <Route index element={<List />}></Route>
              <Route path=':productId' element={<Singlepage />}></Route>
              <Route path='new' element={<Newpage inputs={productInputs} title="Add New Product"/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
