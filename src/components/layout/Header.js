import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link className="nav-link" to="/">Home</Link> | <Link className="nav-link" to="/about">About</Link> {/*| <Link className="nav-link" to="/test">Test</Link> */}
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;