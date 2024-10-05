import React from 'react';

const CircleChart = ({ data, total,color }) => {
  const percentage = (data / total) * 100;

  const radius = 50; 
  const circumference = 2 * Math.PI * radius; 

  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
    
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="white"
        strokeWidth="10"
        fill="transparent"
      />

      {/* Percentage data circle */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke={color}
        strokeWidth="10"
        fill="transparent"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={0}
        transform="rotate(-90 60 60)"
      />

      {/* Text in the center */}
      <text
        x="50%" 
        y="50%" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        fontSize="16" 
        fill="black"
      >
        {`${Math.round(percentage)}%`}
      </text>
    </svg>
  );
};

export default CircleChart
