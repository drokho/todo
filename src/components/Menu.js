import React, { Component } from 'react';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export class Menu extends Component {

    state = {
        menu: ''
    }

    handleMenu = () => {
        this.setState({menu: this.state.menu === '' ? 'open': ''})
    }

    render() {
        return (
            <div className={'menu ' + this.state.menu}>
                <div className="menu-btn" onClick={this.handleMenu}>
                    <MenuSharpIcon />
                </div>
                <div className="menu-container">
                    <div className="menu-bg"></div>
                    <div className={'menu-content-container ' + this.state.menu}>
                        <div className="menu-close" onClick={this.handleMenu}>
                            <CloseSharpIcon />
                        </div>
                        <div className="menu-content">
                            <ul>
                                <li><LoginButton /></li>
                                <li><LogoutButton /></li>
                                <li>Item 3</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}



export default Menu