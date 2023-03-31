import React, { useState, useEffect, useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const fun = useMemo(() => {
    return "hello";
  }, [count]);

  return (
    <div>
      <h1>useMemo</h1>
      <h2>count : {count}</h2>
      <h2>Item : {item}</h2>
      {fun}
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setItem(item * 10)}>Item</button>
    </div>
  );
};

export default Memo;
