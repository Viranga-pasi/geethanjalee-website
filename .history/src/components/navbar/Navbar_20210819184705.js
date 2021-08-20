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
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Services</a>
							</li>
							<li>
								<a href="#">Gallery</a>
							</li>
							<li>
								<a href="#">Feedback</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
