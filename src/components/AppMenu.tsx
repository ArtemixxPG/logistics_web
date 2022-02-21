import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../css/menustyle.css'
import '../css/icon.css'
// @ts-ignore
import logo from '../assests/logoWhite.png'

// @ts-ignore
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {Modal} from "./AppWindow";

interface IMenuProps {
    isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
    const [isModal, setModal] = useState(false);
    return (
        <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>

            <div id="st-container" className={"st-container"}>
                <nav className={"st-menu st-effect-11"} id="menu-11">
            <h2>
                <Link to="/"><img src={logo} className={"header"}/></Link>
            </h2>
                <SimpleBar >
                <ul className={"style-height"}>

                        <Link className={"st-menu-link"} to="/gfa" id="gfa" ><li className={"icon icon-georadar"}>GFA </li>
                        </Link>

                    </ul>
                    <footer>
                       <li className={"icon icon-georadar"} onClick={setModal(!isModal)}>Load CSV </li>
                        <Modal closeModal={isModal}></Modal>
                    </footer>
                </SimpleBar>
                </nav>
            </div>

        </div>
    );
};
