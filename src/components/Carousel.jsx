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
		autoplaySpeed: 2000,
		cssEase: 'linear',
		pauseOnHover: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		beforeChange: handleBeforeChange,
		afterChange: handleAfterChange,
		responsive: [
			{
				breakpoint: 1024, // Para pantallas menores a 1024px
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
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
		<Slider {...settings} className="w-full h-4/6 my-5 flex">
			<Link to="characterDesign" draggable="false" id="chDesign" className="categoria " onClick={handleClick}>
				<p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug">
					Character <br />
					Design
				</p>
			</Link>
			<Link to="animation" draggable="false" id="animation" className="categoria " onClick={handleClick}>
				<p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug">Animation</p>
			</Link>
			<Link to="backgroundDesign" draggable="false" id="bgDesign" className="categoria " onClick={handleClick}>
				<p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug">
					Background <br />
					Design
				</p>
			</Link>
			<Link to="ilustration" draggable="false" id="ilustration" className="categoria " onClick={handleClick}>
				<p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug">Ilustration</p>
			</Link>
		</Slider>
	);
}
