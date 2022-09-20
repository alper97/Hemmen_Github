import React, { Component } from "react";
import Slider from "react-slick";
import Pic3 from "../data/img/pic3.png";
import Pic2 from "../data/img/pic2.png";
import Pic1 from "../data/img/pic1.png";
import Search from "../components/Searchbar"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };
    return (
      <div className="shadow-lg rounded-2xl">
        <Slider {...settings}>
          <div class="relative">
            <div class="grid grid-cols-10 bg-gradient-to-br from-[#557c93] via-[#6d90b9] to-[#bbc7dc] rounded-2xl pb-10">
              <div class=" col-span-7 p-24 pb-36">
                <h1 class='font-bold text-5xl'>
                Lorem, ipsum. <br />Lorem, ipsum. <br />Lorem, ipsum.
                </h1>
                <p class='text-base'>
                  Lorem ipsum dolor sit amet consectetur..
                </p>
              </div>
              <div class=" col-span-3  backdrop-brightness-125 rounded-tr-2xl rounded-br-2xl flex items-end justify-center -mb-10">
                <img src={Pic1} alt="Bune" class="w-80 object-cover  " />
              </div>
            </div>             
          </div>
          <div class="relative">
            <div class="grid grid-cols-10 bg-gradient-to-br from-[#0b3866] via-[#0f68a9] to-[#51F59E] rounded-2xl pb-10">
              <div class=" col-span-7 p-24 pb-36">
                <h1 class='font-bold text-5xl'>
                Lorem, ipsum. <br />Lorem, ipsum. <br />Lorem, ipsum.
                </h1>
                <p class='text-base'>
                Lorem ipsum dolor sit amet..
                </p>
              </div>
              <div class=" col-span-3  backdrop-brightness-125 rounded-tr-2xl rounded-br-2xl flex items-end justify-center -mb-10">
                <img src={Pic2} alt="Bune" class="w-80 object-cover " />
              </div>
            </div>             
          </div>
          <div class="relative">
            <div class="grid grid-cols-10 bg-gradient-to-br from-[#E96443] via-[#FC5C7D] to-[#6A82FB] rounded-2xl pb-10">
              <div class=" col-span-7 p-24 pb-36">
                <h1 class='font-bold text-5xl'>
                  Lorem, ipsum. <br />Lorem, ipsum. <br /> Lorem, ipsum.
                </h1>
                <p class='text-base'>
                  Lorem, ipsum dolor. için hemen tıkla.
                </p>
              </div>
              <div class=" col-span-3  backdrop-brightness-125 rounded-tr-2xl rounded-br-2xl flex items-end justify-center -mb-10">
                <img src={Pic3} alt="Bune" class="w-72 object-cover " />
              </div>
            </div>             
          </div>
        </Slider>
        <div class="absolute -mt-36 ml-24 " >
          <Search />
        </div>
      </div>
    );
  }
}