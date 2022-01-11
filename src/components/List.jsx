import React from "react";

const List = () => {
  return (
    <div>
      <div className="box" id="heading">
        <h1>To Do List Items</h1>
      </div>

      <div className="box">
        <div className="item">
          <input type="checkbox" />
          <p>Item 1</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Item 2</p>
        </div>
        <div className="item">
          <input type="checkbox" />
          <p>Item 3</p>
        </div>

        <form className="item">
          <input
            type="text"
            name="newItem"
            placeholder="New Item"
            autoComplete="off"
          />
          <button type="submit">+</button>
        </form>
      </div>
    </div>
  );
};

export default List;
