import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function MainPageSlider() {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/71830167_2795387333818176_6017939357170663424_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=IwY7lVtl0GcAX-E7IvV&_nc_oc=AQkIoJMie26oZXsBoHb3t7PZst5k1i03oCYy3aH5T6JNMhzzsiyTX3speWN_CVZxlXo&_nc_ht=scontent.fcmb2-2.fna&oh=49cc7426bfd8d6fa5ae4dfc91a172441&oe=6142B9C9"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="holder.js/800x400?text=Second slide&bg=282c34"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="holder.js/800x400?text=Third slide&bg=20232a"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default MainPageSlider;
