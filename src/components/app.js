import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import CarouselComponent from './CarouselComponent';
import '../style/app.scss';

export default function App() {
  const [toDoListArray, setToDoListArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://rwj-to-do-list-5f4780d04441.herokuapp.com//api/get/tasks');
      const data = await response.json();
      setToDoListArray(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const itemId = String(Date.now());
    const toDoItem = inputValue;
    addItemToArray(itemId, toDoItem);
    setInputValue('');

    try {
      const response = await fetch('https://rwj-to-do-list-5f4780d04441.herokuapp.com//api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: toDoItem }),
      });
      const data = await response.json();
      console.log('Added task:', data);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleItemClick = async (id) => {
    removeItemFromArray(id);

    try {
      const response = await fetch(`https://rwj-to-do-list-5f4780d04441.herokuapp.com//api/delete/task/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log('Deleted task:', data);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const addItemToArray = (itemId, toDoItem) => {
    setToDoListArray([...toDoListArray, { itemId, toDoItem }]);
  };

  const removeItemFromArray = (id) => {
    setToDoListArray((prevArray) => prevArray.filter((item) => item.itemId !== id));
  };

  const getItemById = (id) => {
    return toDoListArray.find((item) => item.itemId === id);
  };

  const updateItemValue = (id, newValue) => {
    setToDoListArray((prevArray) =>
      prevArray.map((item) =>
        item.itemId === id ? { ...item, toDoItem: newValue } : item
      )
    );
  };

  const handleEditClick = (id) => {
    const newValue = prompt('Edit ask:', getItemById(id).toDoItem);
    if (newValue !== null) {
      updateItemValue(id, newValue);
    }
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Task About to be DELETED!')) {
      removeItemFromArray(id);
    }
  };

  return (
    <div>
      <h1>Done Is Better Than "Perfect"</h1>
      <section className="container">
        <div className="heading">
          <img
            className="heading__img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"
            alt="Laptop"
          />
          <h1 className="heading__title">To-Do</h1>
        </div>
        <form className="form" onSubmit={handleFormSubmit}>
          <div>
            <label className="form__label" htmlFor="todo">
              ~ Things To Make Happen ~
            </label>
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
            <button className="button">
              <span>Submit</span>
            </button>
          </div>
        </form>
        <div>
          <ul className="toDoList">
            {toDoListArray.map((item) => (
              <li key={item.itemId} data-id={item.itemId}>
                <div className="list-item__content">
                  {item.toDoItem}
                </div>
                <div className="list-item__icons">

                  <div className="edit-icon">
                    <FontAwesomeIcon icon={faEdit} onClick={() => handleEditClick(item.itemId)} />
                  </div>

                  <div className="delete-icon">
                    <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick(item.itemId)} />
                  </div>

                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <CarouselComponent />
        </div>
      </footer>
    </div>
  );
}
