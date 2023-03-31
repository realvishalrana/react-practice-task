import React, { useState, useEffect } from "react";

const PrintData = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Post</button>
      <button onClick={() => setResourceType("users")}>User</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map((item, index) => {
        return <ul key={index}>{JSON.stringify(item)}</ul>;
      })}
    </div>
  );
};

export default PrintData;
