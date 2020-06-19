import React from "react";
import {AppBar} from "@material-ui/core";
import "./Header.css"
import LogoArea from "./Header/LogoArea";
import Navigation from "./Header/Navigation";

export default function Header() {


    return (

        <AppBar className={"header-style"} position={"static"}>
            <LogoArea/>
            <Navigation/>
        </AppBar>


    );
}