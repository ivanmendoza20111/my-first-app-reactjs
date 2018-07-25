import React, { Component } from 'react';

class Navigation extends Component{
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a className="text-white">
                    { this.props.titulo }
                    <span className="bagde badge-pill badge-light ml-2">
                        {this.props.numero}
                    </span>
                </a>
            </nav>
        );
    }
}

export default Navigation;