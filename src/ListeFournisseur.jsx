import React from 'react'
import { Sidebar } from './components/Sidebar'
import MyNavbar from './components/Navbar'
import MainFournisseur from './components/MainFournisseur'

const ListeFournisseur = () => {
  return (
    <>
    
      <div>
        <Sidebar />
      </div>
      <div>
        <MyNavbar />
      </div>

      <div>
        <MainFournisseur />
      </div>
      
    </>
  )
}

export default ListeFournisseur