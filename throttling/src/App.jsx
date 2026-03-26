import React, { useEffect } from "react";

function App() {
  function throttle(fn, delay = 500) {
    let lastCall = 0;

    return function (...args) {
      let now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn(...args);
      }
    };
  }

  useEffect(() => {
    // set you api calling logic here
    function handleScroll() {
      console.log("API Call Made");
    }

    const throttleFn = throttle(handleScroll, 1000);

    window.addEventListener("scroll", throttleFn);

    return () => {
      window.removeEventListener("scroll", throttleFn);
    };
  }, []);

  return <div></div>;
}

export default App;
