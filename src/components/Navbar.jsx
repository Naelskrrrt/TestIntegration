// import React from 'react';

import { ListItem, ListItemPrefix, ListItemSuffix } from "@material-tailwind/react";
import UserPng from "../assets/icons/MaleUser.svg"
import { BellAlertIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const MyNavbar = () => {
  return (
    <nav className="bg-transparent w-full" style={{
        position: "absolute",
        top: 0,
        width: "calc(100% - 25rem)",
        left: "22rem",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
    }}
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        <a href="/" className=" font-bold" style={{
          color: "#39ABD3",
          fontSize: "1.5rem"
        }}> Gestion </a>
        <div className="flex space-x-4 flex justify-between items-center py">
            <ListItem>
              <ListItemPrefix>
                  <img src={UserPng} alt="User Png"/>
              </ListItemPrefix>
              Responsable de Stock
              <ListItemSuffix>
                  <ChevronDownIcon className="h-5 w-5 mx-3" />
              </ListItemSuffix>
            </ListItem>
          
          
            <ListItem className="h-10 w-10">
              <BellAlertIcon className="h-10 w-10"/>
            </ListItem>
          
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
