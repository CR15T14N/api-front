import { AllMusic } from './Pages/AllMusic'
import { VistaPrev } from './Pages/VistaPrev';
import { Home } from './Pages/Home';
import {Error} from './components/Error'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import MusicContextProvider from './context/MusicContext'
import "./App.css"


function App() {

  return (
    <>
     <BrowserRouter>


    <MusicContextProvider>


      <div className='main-background'>
    <Routes> 
      <Route path='/' element={<Home />}></Route>
      <Route path='/artists' element={<AllMusic />}></Route>
      <Route path='/vistaprevia' element={<VistaPrev />} ></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
      </div>

    </MusicContextProvider>
    
  
     </BrowserRouter>
    </>
  )
}

export default App
