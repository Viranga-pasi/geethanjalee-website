import React from 'react';
import './carousel.css';
function MainPageSlider() {
	return (
		<>
			<div
				className="carousel slide"
				data-ride="carousel"
				id="carouselExampleIndicators"
			>
				<ol className="carousel-indicators">
					<li
						className="active"
						data-slide-to="0"
						data-target="#carouselExampleIndicators"
					></li>
					<li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
					<li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							alt="First slide"
							className="d-block w-100"
							src="https://i.postimg.cc/Jn0X0pDS/1.jpg"
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5
								className="animated bounceInRight"
								style="animation-delay: 1s"
							>
								Web Development
							</h5>
							<p className="animated bounceInLeft" style="animation-delay: 2s">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Maxime, nulla, tempore. Deserunt excepturi quas vero.
							</p>
							<p className="animated bounceInRight" style="animation-delay: 3s">
								<a href="#">More Info</a>
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							alt="Second slide"
							className="d-block w-100"
							src="https://i.postimg.cc/SQXZtrTZ/2.jpg"
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5 className="animated slideInDown" style="animation-delay: 1s">
								web design
							</h5>
							<p className="animated fadeInUp" style="animation-delay: 2s">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Maxime, nulla, tempore. Deserunt excepturi quas vero.
							</p>
							<p className="animated zoomIn" style="animation-delay: 3s">
								<a href="#">More Info</a>
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							alt="Third slide"
							className="d-block w-100"
							src="https://i.postimg.cc/Jh4x3cH5/3.jpg"
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5 className="animated zoomIn" style="animation-delay: 1s">
								Digital Marketing
							</h5>
							<p className="animated fadeInLeft" style="animation-delay: 2s">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Maxime, nulla, tempore. Deserunt excepturi quas vero.
							</p>
							<p className="animated zoomIn" style="animation-delay: 3s">
								<a href="#">More Info</a>
							</p>
						</div>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					data-slide="prev"
					href="#carouselExampleIndicators"
					role="button"
				>
					<span
						aria-hidden="true"
						className="carousel-control-prev-icon"
					></span>{' '}
					<span className="sr-only">Previous</span>
				</a>{' '}
				<a
					className="carousel-control-next"
					data-slide="next"
					href="#carouselExampleIndicators"
					role="button"
				>
					<span
						aria-hidden="true"
						className="carousel-control-next-icon"
					></span>{' '}
					<span className="sr-only">Next</span>
				</a>
			</div>
		</>
	);
}

export default MainPageSlider;
