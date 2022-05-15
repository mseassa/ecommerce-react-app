import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import sliderimg from "../../images/slider1.png";
import slider4 from "../../images/slider4.png";
import prod3 from "../../images/prod3.png";
import prod4 from "../../images/prod4.png";

const Slider = () => {
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};
return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="slider-background">
        <div className="d-flex flex-row justify-content-center align-items-center">
            <img
            style={{ height: "296px", width: "313.53px" }}
            className="d-block"
            src={sliderimg}
            alt="First slide"
            />
            <div>
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
            </div>
        </div>
        </Carousel.Item>
        <Carousel.Item className="slider-background2">
        <div className="d-flex flex-row justify-content-center align-items-center">
            <img
            style={{ height: "296px", width: "313.53px" }}
            className="d-block"
            src={slider4}
            alt="First slide"
            />
            <div>
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
            </div>
        </div>
        </Carousel.Item>
        <Carousel.Item className="slider-background3">
        <div className="d-flex flex-row justify-content-center align-items-center">
            <img
            style={{ height: "296px", width: "313.53px" }}
            className="d-block"
            src={prod3}
            alt="First slide"
            />
            <div>
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
            </div>
        </div>
        </Carousel.Item>
        <Carousel.Item className="slider-background4">
        <div className="d-flex flex-row justify-content-center align-items-center">
            <img
            style={{ height: "296px", width: "313.53px" }}
            className="d-block"
            src={prod4}
            alt="First slide"
            />
            <div>
            <h3 className="slider-title">هناك خصم كبير</h3>
            <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
            </div>
        </div>
        </Carousel.Item>
    </Carousel>
    </>
);
};

export default Slider;
