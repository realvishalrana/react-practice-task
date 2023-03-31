import React from "react";

const Item = ({ isPacked, name }) => {
  // {
  //   isPacked ? <del>name</del> : name;
  // }
  return (
    <li className="item">
      {name}
      {isPacked && "✨"}
    </li>
  );
};

export default function PackingList() {
  return (
    <>
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item isPacked={true} name="space" />
          <Item isPacked={true} name="Helmet" />
          <Item isPacked={false} name="Photo" />
        </ul>
      </section>
    </>
  );
}
