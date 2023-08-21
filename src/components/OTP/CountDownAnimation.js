import React, {
  forwardRef,
  useState,
  useEffect,
  useImperativeHandle,
} from "react";
import "./otp-count-down-animation.scss";
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const CountDownAnimation = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getAlert() {
      const { alert, warning, info } = COLOR_CODES;

      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(alert.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(info.color);
      setTimeLeft(TIME_LIMIT);
      props.setIsDisable(false);
    },
    getTimeLimit0() {
      setTimeLeft(1);
    },
  }));
  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD,
    },
  };

  let timePassed = 0;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;
  const TIME_LIMIT = 20;
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  const onTimesUp = () => {
    clearInterval(timerInterval);
  };

  const startTimer = () => {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML =
        formatTime(timeLeft);
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  };

  const setRemainingPathColor = (timeLeft) => {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  };

  const calculateTimeFraction = () => {
    const rawTimeFraction = (timeLeft - 1) / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  };

  const setCircleDasharray = () => {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  };
  useEffect(() => {
    if (timeLeft === 0) {
      props.setIsDisable(true);
      return;
    }
    const timer = setInterval(() => {
      const currentTime = timeLeft - 1;
      setTimeLeft(currentTime);
      setCircleDasharray();
      setRemainingPathColor(currentTime);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);
  return (
    <div className="otp-count-down-animation">
      <div className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            ></circle>
            <path
              id="base-timer-path-remaining"
              stroke-dasharray="283"
              className={`base-timer__path-remaining ${remainingPathColor}`}
              d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
            ></path>
          </g>
        </svg>
        <span id="base-timer-label" className="base-timer__label">
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
});
export default CountDownAnimation;
