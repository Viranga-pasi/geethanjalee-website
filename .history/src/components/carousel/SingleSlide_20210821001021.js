import React from 'react';

function SingleSlide({ details }) {
	return (
		<>
			<img
				alt="Second slide"
				className="d-block w-100"
				src="https://i.postimg.cc/Jn0X0pDS/1.jpg"
			/>
			<div className="carousel-caption d-none d-md-block">
				<h5 className="animated slideInDown">web design</h5>
				<p className="animated fadeInUp">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
					nulla, tempore. Deserunt excepturi quas vero.
				</p>
				<p className="animated zoomIn">
					<a href="#">More Info</a>
				</p>
			</div>
		</>
	);
}

export default SingleSlide;
