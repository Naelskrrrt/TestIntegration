import './App.css'
import Main from './components/Main'
import MyNavbar from './components/Navbar'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
    
      <div>
        <Sidebar />
      </div>
      <div>
        <MyNavbar />
      </div>

      <div>
        <Main />
      </div>
      
    </>
  )
}

export default App
