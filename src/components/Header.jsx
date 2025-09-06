import React from "react";
import NavigationBar from "../layouts/Navigation";
import  { FlightSearch } from "./FlightSearch";

export const Header = ()=>{
    return(
        <div className="header">
            <NavigationBar/>
            <FlightSearch/>
        </div>
    )
}