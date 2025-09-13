import React from "react";
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="container" id="header">
                <h3>
                    Bienvenido a la página de películas
                </h3>
            </div>
        );
    }
}
export default Header;

