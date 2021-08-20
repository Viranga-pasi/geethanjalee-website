import React from 'react';

function SingleSlide() {
	return (
		<>
			<img
				alt="First slide"
				className="d-block w-100"
				src="https://i.postimg.cc/Jn0X0pDS/1.jpg"
			/>
			<div className="carousel-caption d-none d-md-block">
				<h5 className="animated bounceInRight">Web Development</h5>
				<p className="animated bounceInLeft">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
					nulla, tempore. Deserunt excepturi quas vero.
				</p>
				<p className="animated bounceInRight">
					<a href="#">More Info</a>
				</p>
			</div>
		</>
	);
}

export default SingleSlide;
