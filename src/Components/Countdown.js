import { render } from "@testing-library/react";
import {useState,useEffect} from "react";
import "./Countdown.css"


const SVGCircle = ({ radius,color }) => (
  
  <svg className="countdown-svg">
      <path
          fill="none"
          stroke={color}
          strokeWidth="1"
          d={describeArc(50, 50, 48, 0, radius)}
      />
  </svg>
);


function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  
  return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  var d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y
  ].join(' ');
  
  return d;
}


function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
      ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

function Countdown(props) {

  let days,hours,minutes,seconds;
  const calculateTimeLeft = () => {
  
  const difference = +new Date(props.countdownDate) - +new Date();
  let timeLeft = {};
  if (difference > 0) {
  days = Math.floor(difference / (1000 * 60 * 60 * 24)) ? Math.floor(difference / (1000 * 60 * 60 * 24)) :0 ;
  hours = Math.floor((difference / (1000 * 60 * 60)) % 24)?Math.floor((difference / (1000 * 60 * 60)) % 24):0;
  minutes = Math.floor((difference / 1000 / 60) % 60)? Math.floor((difference / 1000 / 60) % 60):0;
  seconds = Math.floor((difference / 1000) % 60)?Math.floor((difference / 1000) % 60):0;
  timeLeft = [days,hours,minutes,seconds];
  }
  return timeLeft;
};
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {const timer = setTimeout(() => {setTimeLeft(calculateTimeLeft());}, 1000);return () => clearTimeout(timer);});
        
        // Mapping the date values to radius values
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
        


return (
  <div>
      <div className="countdown-wrapper">
          { (
              <div className="countdown-item" style={{color:props.color}}>
                  {days}
                  <span>days</span>
              </div>
          )}
          { (
              <div className="countdown-item" >
                  <SVGCircle radius={hoursRadius} color={props.color}/>
                  {hours}
                  <span>hours</span>
              </div>
          )}
          { (
              <div className="countdown-item">
                  <SVGCircle radius={minutesRadius} color={props.color}/>
                  {minutes}
                  <span>minutes</span>
              </div>
          )}
          { (
              <div className="countdown-item">
                  <SVGCircle radius={secondsRadius} color={props.color}/>
                  {seconds}
                  <span>seconds</span>
              </div>
          )}
      </div>
  </div>
);
}

export default Countdown;
