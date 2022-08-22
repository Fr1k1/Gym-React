import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
const Hero = () => {
  const animacija = { type: "spring", duration: 3 };
  return (
    <div className="hero">
      <div className="blur blur-hero"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...animacija, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              We help you to achieve your dream body and to show everyone what
              you can do
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+1000</span>
            <span>members</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <buttons className="btn">Get started</buttons>
          <buttons className="btn">Learn more</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join now</button>

        <div className="heart-rate">
          <img src={Heart} alt="heart_img"></img>

          <span>Heart Rate</span>
          <span>150 BPM</span>
        </div>
        <img src={hero_image} alt="hero-img" className="hero-image" />
        <img src={hero_image_back} alt="hero-img" className="hero-image-back" />
        <div className="calories">
          <img src={Calories} alt="calories" />

          <div>
            <span>Calories burned</span>
            <span>220kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
