import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    const handleDarkModeColorClick = (color) => {
        props.toggleTheme(color);
    }
    const handleContacts = (number) => {
        props.toggleContacts(number)
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TextUtils</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" onClick={() => handleContacts('1')} to="/contact">E-mail</Link></li>
                                <li><Link className="dropdown-item" onClick={() => handleContacts('2')} to="/">Linkedin</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" onClick={() => handleContacts('3')} to="/">Telegram</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <button type="button" onClick={props.toggleMode} className={`btn btn-${props.color}`}>{props.text}</button>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <div className="dropdown mx-3">
                            <button className={`btn btn-${props.color} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Darkmode Color
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" onClick={() => handleDarkModeColorClick('black')} to="/">Black - Default</Link></li>
                                <li><Link className="dropdown-item" onClick={() => handleDarkModeColorClick('grey')} to="/">Grey</Link></li>
                                <li><Link className="dropdown-item" onClick={() => handleDarkModeColorClick('dark-green')} to="/">Dark Green</Link></li>
                                <li><Link className="dropdown-item" onClick={() => handleDarkModeColorClick('red')} to="/">Red</Link></li>
                            </ul>
                        </div>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className={`btn btn-outline-info`} type="submit">Search</button>
                    </form>
                </div>
            </div>
            </nav>
    )
}

export default Navbar