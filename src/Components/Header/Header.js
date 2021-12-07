import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark fz-nav">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav  w-100 d-flex justify-content-center">
                            <Link className="nav-link" to="/">Головна </Link>
                            <Link className="nav-link" to="/Portal">Портал</Link>
                            <Link className="nav-link" to="/About">Про гру</Link>
                        </div>
                    </div>
                </nav>


            </div>

        );
    }
}

export default Header;