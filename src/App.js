import React from 'react'
import './App.css';
import './Props.css';
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
