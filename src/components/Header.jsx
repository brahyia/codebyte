import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => (
    <div className='header'>
        <div className='nav_items_wrap'>
            <div className="logo_wrappeer">
                <Link to={'/'}>Brand </Link>
            </div>
            <div>
                <Link to="/exams">Exams</Link>
            </div>
            <div>
                <Link to="/admin">Admin</Link>
            </div>
        </div>
    </div>
);

export default Header;
