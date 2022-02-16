import React, {useState} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi";
import {Menu} from "./components/AppMenu.tsx";
import {ReactDimmer} from "react-dimmer";
import "./css/styles.css";

export default function  AppNavbar (props){
    const [isMenu, setMenu] = useState(false);
    // constructor(props) {
    //     super(props);
    //     this.state = {isOpen: false,
    //         isMenu : false};
    //     this.toggle = this.toggle.bind(this);
    // }
    //
    // toggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }
    //
    const handleMenuChange = close =>{
        setMenu(!isMenu)
    }

    return(
         <Navbar className="header_nav">
            <GiHamburgerMenu className="menu-btn" onClick={handleMenuChange}/>
            <Menu isMenuOpen={isMenu} />
            <h2 className="header">{props.title}</h2>
            <ReactDimmer
                isOpen={isMenu}
                exitDimmer={handleMenuChange}
                zIndex={100}
                blur={1.5}
            />

        </Navbar>
    )
}