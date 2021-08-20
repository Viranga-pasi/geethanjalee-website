import React from 'react';
import './carousel.css';
import SingleSlide from './SingleSlide';
function MainPageSlider() {
	const details = [
		{
			img: 'https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/71830167_2795387333818176_6017939357170663424_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=5V9dRz0izVEAX98m7-y&_nc_oc=AQk5K7mCWoGk1_jFp4Bj1JYs7AJ3bPIFsZf-qV0u_TQdxXi9JbsJE4Qp7xwp8qycMB8&_nc_ht=scontent.fcmb2-2.fna&oh=b2e065912f4f4a89a534c1193eda6c94&oe=6146AE49',
			title: 'Geethnajalee',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla, tempore. Deserunt excepturi quas vero.',
		},
		{
			img: 'https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/71531912_2795372837152959_5233881571068477440_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=GUYecBAummcAX9kQdid&tn=O0RsKyDrS8k3nRMp&_nc_ht=scontent.fcmb2-2.fna&oh=96e4880a6102ebb30f6e07713b34bded&oe=6146BC48',
			title: 'Nanasara',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla, tempore. Deserunt excepturi quas vero.',
		},
		{
			img: 'https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/137240329_1147184909018216_6292797781492237367_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_ohc=OkUIWQIynmAAX8pEXKL&_nc_ht=scontent.fcmb2-2.fna&oh=c10e20ca9c2d9ac4c94c5258374e9fc9&oe=61465E3D',
			title: 'Sahodara Piyapath',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla, tempore. Deserunt excepturi quas vero.',
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
						<SingleSlide details={details[0]} />
					</div>
					<div className="carousel-item">
						<SingleSlide details={details[1]} />
					</div>
					<div className="carousel-item">
						<SingleSlide details={details[2]} />
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
