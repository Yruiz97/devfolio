import React, { useState, useEffect } from "react";

export const Slide = ({ data, alt, delayTime }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let interval;
    setTimeout(() => {
      interval = setInterval(() => {
        setCurrent((current) => (current + 1) % data.length);
      }, 5000);
    }, delayTime)
    
    return () => clearInterval(interval);
  }, [data.length, delayTime]);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={data[data.length - 1].asset.url}
        alt={alt}
        style={{ visibility: "hidden" }}
      />
      <img
        src={data[data.length - 1].asset.url}
        alt={alt}
        style={{
          left: `${(-current - 1) * 100}%`,
          top: 0,
          position: "absolute",
          transition: "all 0.5s",
        }}
      />
      {data.map((img, index) => (
        <img
          key={img.asset.url}
          src={img.asset.url}
          alt={alt}
          style={{
            left: `${(index - current) * 100}%`,
            top: 0,
            position: "absolute",
            transition: "all 0.5s",
          }}
        />
      ))}
      <img
        src={data[0].asset.url}
        alt={alt}
        style={{
          left: `${(data.length - current) * 100}%`,
          top: 0,
          position: "absolute",
          transition: "all 0.5s",
        }}
      />
    </div>
  );
};
