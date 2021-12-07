import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <div>
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/parametric">
                                    Parametric Lab
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/fractal">
                                    Fractal Lab
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/motion">
                                    Motion Lab
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;