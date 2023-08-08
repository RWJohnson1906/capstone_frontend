import React, { useState } from 'react';
import '../style/app.scss';

export default function App() {
  const [toDoListArray, setToDoListArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const itemId = String(Date.now());
    const toDoItem = inputValue;
    addItemToArray(itemId, toDoItem);
    setInputValue('');
  };

  const handleItemClick = (id) => {
    removeItemFromArray(id);
  };

  const addItemToArray = (itemId, toDoItem) => {
    setToDoListArray([...toDoListArray, { itemId, toDoItem }]);
    console.log(toDoListArray);
  };

  const removeItemFromArray = (id) => {
    setToDoListArray((prevArray) => prevArray.filter((item) => item.itemId !== id));
    console.log(toDoListArray);
  };

  return (
    <div>
      <h1>Done Is Better Than "Perfect"</h1>
      <section className="container">
        <div className="heading">
          <img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" alt="Laptop" />
          <h1 className="heading__title">To-Do</h1>
        </div>
        <form className="form" onSubmit={handleFormSubmit}>
          <div>
            <label className="form__label" htmlFor="todo">~ Things To Make Happen ~</label>
            <input
              className="form__input"
              type="text"
              id="todo"
              name="to-do"
              size="30"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
            <button className="button"><span>Submit</span></button>
          </div>
        </form>
        <div>
          <ul className="toDoList">
            {toDoListArray.map((item) => (
              <li key={item.itemId} data-id={item.itemId} onClick={() => handleItemClick(item.itemId)}>
                {item.toDoItem}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
