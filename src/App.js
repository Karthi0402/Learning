import React from 'react'
import './Css/App.css';
import './Css/Props.css';
import './Css/uifont.css';
// import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import SideBar from './Components/SideBar';
const App = () => {
  return (
    <div className='APP flex'>
        <SideBar/>
        <Header/>
        {/* <BrowserRouter>
            <Routes>
              <Route />
            </Routes>
        </BrowserRouter> */}
    </div>
  )
}

export default App
