import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="container ms-auto">
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}

export default Layout
