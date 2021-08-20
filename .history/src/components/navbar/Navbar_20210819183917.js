import React from 'react';
import './navbar.css';
import navLogo from '../../img/geethanjalee.png';
function Navbar() {
	return (
		<>
			<input type="checkbox" id="active" />
			<label for="active" class="menu-btn">
				<i class="fas fa-bars"></i>
			</label>
			<div class="wrapper">
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
		</>
	);
}

export default Navbar;
