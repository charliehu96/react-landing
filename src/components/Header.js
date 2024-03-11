import React, { useState } from 'react';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Logo */}
                <img src="path/to/your/logo.png" alt="Logo" style={{ marginRight: '1rem' }} />
                
                {/* Menu Dropdown */}
                <div>
                    <button onClick={toggleDropdown} style={{ padding: '0.5rem 1rem' }}>
                        Menu
                    </button>
                    {isDropdownOpen && (
                        <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', boxShadow: '0px 4px 12px rgba(0,0,0,0.1)', padding: '1rem' }}>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><a href="#section1">Item 1</a></li>
                                <li><a href="#section2">Item 2</a></li>
                                <li><a href="#section3">Item 3</a></li>
                                {/* Add more menu items here */}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Contact Me Button */}
            <button style={{ padding: '0.5rem 1rem' }}>
                Contact Me
            </button>
        </header>
    );
};

export default Header;
