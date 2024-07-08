import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React from "react";
import Slider from "react-slick";

export function Carousel(){

    var settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
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
    
    return(
        <Slider {...settings} className="w-full h-4/6 my-5 flex">
            <a href="#" draggable="false" id="chDesign" className="categoria ">
                <p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug">Character <br/>Design</p>
            </a>
            <a href="#" draggable="false" id="animation" className="categoria ">
                <p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug">Animation</p>
            </a>
            <a href="#" draggable="false" id="bgDesign" className="categoria ">
                <p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug">Background <br/>Design</p>
            </a>
            <a href="#" draggable="false" id="ilustration" className="categoria ">
                <p className=" text-carousel py-5 px-10 m-20 text-4xl bg-black leading-snug">Ilustration</p>
            </a>


        </Slider>
    )
}