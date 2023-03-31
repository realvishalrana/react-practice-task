import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 500);
    setTimeout(() => {
      setCount((prev) => prev + 2);
      setTimeout(() => {
        setCount((prev) => prev + 3);
      }, 1000);
    }, 100);
  }, []);

  function handleClick() {
    setCount((count) => count + 1);
  }

  return <button onClick={handleClick}>You pressed me {count} times</button>;
};

export default Counter;
