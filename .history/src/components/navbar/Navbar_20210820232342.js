import React from 'react';
import './navbar.css';
import navLogo from '../../img/geethanjalee.png';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<header>
			<nav class="navbar navbar-expand-lg navbar-light fixed-top">
				<div class="container">
					<a class="navbar-brand" href="#">
						Creativo
					</a>{' '}
					<button
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						class="navbar-toggler"
						data-target="#navbarSupportedContent"
						data-toggle="collapse"
						type="button"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item active">
								<a class="nav-link" href="#">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									About
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Portfolio
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Services
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
