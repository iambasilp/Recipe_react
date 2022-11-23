import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <img
        className="hero-img"
        src="https://images.unsplash.com/photo-1505682750263-f3f9e519c565?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit"
        alt=""
      />
      <div className="hero-content">
  
        <h1>Its all About Good Food & Taste</h1>
        <p className="text-cent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse
          commodi sequi officiis ex ab. Optio pariatur at officiis quasi, hic,
          ab cum nemo magni temporibus ut animi? At nostrum assumenda velit
        </p>
        <button>Explore</button>
      </div>
    </div>
  );
}
