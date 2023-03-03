import React from "react";
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<div className="container">
			<nav className="nav">
				<div className="nav__brand">
					<NavLink className="nav__link" to='/'>Inicio</NavLink>
				</div>
				<ul className="nav__list">
					<li>
						<NavLink className="nav__link" to='/categoria/fiambre'>Fiambres</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to='/categoria/escabeche'>Escabeches</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to='cart'>
							<CartWidget/>
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;