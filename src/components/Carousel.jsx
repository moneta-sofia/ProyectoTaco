import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import React from "react";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Carousel() {
	const [dragging, setDragging] = useState(false);

	const handleBeforeChange = () => {
		setDragging(true);
	};

	const handleAfterChange = () => {
		setDragging(false);
	};

	const handleClick = (e) => {
		if (dragging) {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	var settings = {
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'linear',
		pauseOnHover: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		beforeChange: handleBeforeChange,
		afterChange: handleAfterChange,
		responsive: [
			{
				breakpoint: 1024, // Para pantallas menores a 1024px
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600, // Para pantallas menores a 600px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Slider {...settings} className="w-full mb-1 flex">
			<Link to="characterDesign" draggable="false" className="categoria-container" onClick={handleClick}>
				<div className="grayPart" />
				<div id="chDesign" className="category" />
				<p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug z-30">
					Character <br />
					Design
				</p>
			</Link>
			<Link to="animation" draggable="false" className="categoria-container " onClick={handleClick}>
				<div className="grayPart" />
				<div id="animation" className="category" />
				<p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug z-30">Animation</p>
			</Link>
			<Link to="backgroundDesign" draggable="false"  className="categoria-container " onClick={handleClick}>
				<div className="grayPart" />
				<div id="bgDesign" className="category" />
				<p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug z-30">
					Background <br />
					Design
				</p>
			</Link>
			<Link to="ilustration" draggable="false" className="categoria-container " onClick={handleClick}>
				<div className="grayPart" />
				<div id="ilustration" className="category" />
				<p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug z-30">Ilustration</p>
			</Link>
		</Slider>
	);
}
