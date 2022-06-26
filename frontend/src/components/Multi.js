import React, { Component } from "react";
import Slider from "react-slick";
import image2 from "../assets/gallery01.jpeg";
import image1 from "../assets/gallery02.jpeg";
import image3 from "../assets/gallery03.jpeg";
import "../styles/multi.css";

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
			// style={{  }}
			<div style={{ textAlign: "center", textdecoration: "none" }}>
				<a
					href="#products"
					// style="text-decoration: none;"
				>
					<button class="button-18">DONATE NOW</button>
				</a>

				<Slider {...settings}>
					<div>
						<img
							src={image1}
							style={{ width: "100%", height: "500px" }}
							alt="_image"
						/>
					</div>
					<div className="Stats">
						<h1 className="title">No. People Fed So Far</h1>
						<p className="count">100K+</p>
						<h1 className="title">No. of People Fed Last month</h1>
						<p className="count">10K+</p>
					</div>
					<div>
						<img
							src={image2}
							style={{ width: "100%", height: "500px" }}
							alt="_image"
						/>
					</div>
					<div className="Stats">
						<h1 className="title">No. of Campaigns conducted</h1>
						<p className="count">50+</p>
						<h1 className="title">Donations through Campaigns</h1>
						<p className="count">1M+</p>
					</div>
					<div>
						<img
							src={image3}
							style={{ width: "100%", height: "500px" }}
							alt="_image"
						/>
					</div>
				</Slider>
				<div className="products" id="products" style={{ marginTop: "100px" }}>
					<h1 className="title">Food Items</h1>
				</div>
			</div>
		);
	}
}
