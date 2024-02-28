"use client";
import Glider from "react-glider";
import "glider-js/glider.min.css";

export class glideOptions {
  slidesToShow: number = 2;
  slidesToScroll: number = 1;
  children?: React.ReactNode;
}

export default function Glide({
  slidesToShow,
  slidesToScroll,
  children,
}: glideOptions) {
  return (
    <Glider
      draggable
      hasDots
      duration={100}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
    >
      {children}
    </Glider>
  );
}
