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
							<li for="clicked">
								<a>
									<Link to="/">Home</Link>
								</a>
							</li>
							<li for="clicked">
								<a>
									<Link to="/geethanjalee">Geethanjalee</Link>
								</a>
							</li>
							<li>
								<a>
									<Link to="/nanasara">Nanasara</Link>
								</a>
							</li>
							<li>
								<a>
									<Link to="/sahodarapiyapath">Sahodara Piyapath</Link>
								</a>
							</li>
							<li>
								<a>
									<Link to="/contact">Contact</Link>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
