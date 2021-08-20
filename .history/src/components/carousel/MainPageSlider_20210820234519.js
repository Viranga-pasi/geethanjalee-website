import React from 'react';
import './carousel.css';
import SingleSlide from './SingleSlide';
function MainPageSlider() {
	const details = [
		{
			img: '',
			title: '',
			Description: '',
		},
	];
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
						<SingleSlide />
					</div>
					<div className="carousel-item">
						<SingleSlide />
					</div>
					<div className="carousel-item">
						<SingleSlide />
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
