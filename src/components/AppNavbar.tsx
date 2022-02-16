import * as React from "react";
import {useState} from "react";
import {Navbar} from "reactstrap";
import {GiHamburgerMenu} from "react-icons/gi";
import {Menu} from "./AppMenu";
import {ReactDimmer} from "react-dimmer";

interface AppNavbar{
    title: string
}

export const AppNavbar = ({title}: AppNavbar) =>{

    const [isMenu, setMenu] = useState(false);


    return(
    <Navbar className="header_nav">
        {/*<GiHamburgerMenu className="menu-btn" onClick={setMenu(!isMenu)}/>*/}
        <Menu isMenuOpen={isMenu} />
        <h2 className="header">title</h2>
        <ReactDimmer
            isOpen={isMenu}
            exitDimmer={setMenu(!isMenu)}
            zIndex={100}
            blur={1.5}
        />

    </Navbar>
    )
}