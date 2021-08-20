import React from 'react';
import './navbar.css';
import navLogo from '../../img/geethanjalee.png';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<header>
			<div className="header-container">
				<div className="right-menu">
					<div className="logo">
						<img src={navLogo} alt="Logo" />
					</div>

					{/* <Link to="/">CSUP BLOG</Link> */}
				</div>
				<div className="left-menu">
					<input type="checkbox" id="active" />
					<label for="active" className="menu-btn">
						<i className="fas fa-bars"></i>
					</label>
					<div className="wrapper">
						<ul>
							<li>
								<Link to="">Home</Link>
							</li>
							<li>
								<Link to="">Geethanjalee</Link>
							</li>
							<li>
								<Link to="">Nanasara</Link>
							</li>
							<li>
								<Link to="">Sahodara Piyapath</Link>
							</li>
							<li>
								<Link to="">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
