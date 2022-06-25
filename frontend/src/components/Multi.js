import React, { Component } from "react";
import Slider from "react-slick";
import image2 from "../assets/gallery01.jpeg";
import image1 from "../assets/gallery02.jpeg";
import image3 from "../assets/gallery03.jpeg";

export default class PauseOnHover extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: true
		};
		return (
			<div>
				<Slider {...settings}>
					<div>
						<img
							src={image1}
							style={{ width: "100%", height: "500px" }}
							alt="_image"
						/>
					</div>
					<div>
						<img
							src={image2}
							style={{ width: "100%", height: "500px" }}
							alt="_image"
						/>
					</div>
					<div>
						<img
							src={image3}
							style={{ width: "100%", height: "500px" }}
							alt="_image"
						/>
					</div>
				</Slider>
			</div>
		);
	}
}
