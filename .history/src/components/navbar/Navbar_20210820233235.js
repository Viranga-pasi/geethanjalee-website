import React from 'react';
import './navbar.css';
import navLogo from '../../img/geethanjalee.png';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<header>
			<nav className="navbar navbar-expand-xl navbar-light fixed-top">
				<div className="container">
					<Link to="/" className="navbar-brand">
						Geethanjalee
					</Link>{' '}
					<button
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						className="navbar-toggler"
						data-target="#navbarSupportedContent"
						data-toggle="collapse"
						type="button"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<Link to="/" className="nav-link">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/geethanjalee" className="nav-link">
									Geethanjalee
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/nanasara" className="nav-link">
									Nanasara
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/sahodarapiyapath" className="nav-link">
									Sahodara Piyapath
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
