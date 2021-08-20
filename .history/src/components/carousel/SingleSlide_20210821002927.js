import React from 'react';
import { Link } from 'react-router-dom';

function SingleSlide({ details }) {
	return (
		<>
			{details && (
				<>
					<img alt="Second slide" className="d-block w-100" src={details.img} />
					<div className="carousel-caption d-none d-md-block">
						<h5 className="animated slideInDown">{details.title}</h5>
						<p className="animated fadeInUp">{details.description}</p>
						<p className="animated zoomIn">
							<button>
								<Link to={`${details.link}`}>More Info</Link>
							</button>
						</p>
					</div>
				</>
			)}
		</>
	);
}

export default SingleSlide;
