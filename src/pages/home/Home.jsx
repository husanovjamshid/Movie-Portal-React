import React from "react";
import { HeroBanner } from "./heroBanner/HeroBanner";
import "./style.scss";
import { Trending } from "./trending/Trending";

HeroBanner;

export const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};
