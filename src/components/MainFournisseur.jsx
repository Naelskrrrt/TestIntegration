import { TableCellsIcon } from '@heroicons/react/24/solid'
import { Button } from '@material-tailwind/react'
import React from 'react'
import { DefaultTable } from './Table'

const MainFournisseur = () => {
  return (
    <div style={{
      width: "calc(100% - 25rem)",
      position: 'absolute',
      top: "10rem",
      left: "22rem",
      display: "grid",
    }}>
      <div>
        <h1 className='text-2xl font-bold'>Liste des fournisseurs</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto cupiditate laudantium sit ea voluptate rerum ut reiciendis hic at, aperiam alias doloremque quas debitis vero, porro eaque neque. Doloremque!</p>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px"
        // justifyContent: "center"s
      }}>
        <Button style={{
          fontSize: "0.6rem",
          marginTop: "15px",
          borderRadius: "20px",
          background: "#2b9d59"
        }}>Nouveau</Button>

        <Button style={{
          fontSize: "0.6rem",
          marginTop: "15px",
          borderRadius: "20px",
          background: "#2b9d59"
        }}>Exporter</Button>

        <Button style={{
          fontSize: "0.6rem",
          marginTop: "15px",
          borderRadius: "20px",
          background: "#2b9d59"
        }}>Importer</Button>
        
        <Button style={{
          fontSize: "0.6rem",
          marginTop: "15px",
          borderRadius: "20px",
          background: "#2b9d59"
        }}>Actualiser</Button>
      </div>
      <div>
        <DefaultTable />
      </div>
    </div>
  )
}

export default MainFournisseur