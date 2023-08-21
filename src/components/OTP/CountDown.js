import React, { useState, useEffect } from "react";
const CountDown = (props) => {
  const [count, setCount] = useState(60);
  useEffect(() => {
    if (count === 0) {
      props.setIsDisable(true);
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div className="otp-count-down">{count}</div>;
};
// class CountDown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 10,
//     };
//   }
//   componentDidMount() {
//     let currentCount = this.state.count;
//     this.timer = setInterval(() => {
//       let { count } = this.state;
//       this.setState({ count: count - 1 });
//     }, 1000);
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.count !== prevState.count && this.state.count === 0) {
//       if (this.timer) {
//         clearInterval(this.timer);
//       }
//     }
//   }
//   render() {
//     let { count } = this.state;
//     return <div className="otp-count-down">{count}</div>;
//   }
// }
export default CountDown;
