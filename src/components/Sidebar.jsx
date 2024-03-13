import {
    ArchiveBoxArrowDownIcon,
    CalculatorIcon,
    ChevronDownIcon,
    CircleStackIcon,
    ClipboardDocumentCheckIcon
} from "@heroicons/react/24/solid";
import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix
} from "@material-tailwind/react";

import logoIcon from "../assets/icons/Logo.svg";

   
  export function Sidebar() {
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem]  shadow-xl" style={{
        padding: "10px 30px 0 10px"
      }}>
        <div className="mb-5">
          <img src={logoIcon} alt="Logo "/>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <ClipboardDocumentCheckIcon className="h-5 w-5" />
            </ListItemPrefix>
            Commande
            <ListItemSuffix>
                <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ArchiveBoxArrowDownIcon className="h-5 w-5" />
            </ListItemPrefix>
            Traitement
            <ListItemSuffix>
                <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
            </ListItemSuffix>
          </ListItem>
          
          <ListItem>
            <ListItemPrefix>
              <CircleStackIcon className="h-5 w-5" />
            </ListItemPrefix>
            Stock
            <ListItemSuffix>
                <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
            </ListItemSuffix>
          </ListItem>
          <ListItem 

            style={{
                backgroundColor: "rgb(105, 192, 249)",
                background: "linear-gradient(90deg, rgba(105, 192, 249, 1) 23%, rgba(255, 222, 92, 1) 83%)",
                color: "#fff",
                borderRadius: "2rem"
            }}
          >
            <ListItemPrefix>
              <CalculatorIcon className="h-5 w-5" />
            </ListItemPrefix>
            Gestion
            
          </ListItem>
         
        </List>
      </Card>
    );
  }