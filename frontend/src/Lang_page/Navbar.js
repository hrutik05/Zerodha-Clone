import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
                <div className="container py-2">
                    <Link className="navbar-brand" to="/">
                        <img 
                            src='media/logo.svg' 
                            alt='logo' 
                            className='img-fluid' 
                            style={{ width: "120px" }} 
                        />
                    </Link>

                    {/* Toggler Button for Mobile */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible Content */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/signup">Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">Support</Link>
                            </li>  
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
