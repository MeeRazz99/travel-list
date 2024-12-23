import './App.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([])
  let [description, setDescrption] = useState('')
  const [quantity, setQuantity] = useState(1)


  function handleAddItem(e) {
    e.preventDefault();
    let newItem = {
      id: Date.now(),
      description,
      packed: false,
      quantity: quantity
    }
    //don't mutate (push method)
    setItems((items) => [...items, newItem])
    // setDescrption('')
  }

  const handleCheck = (event, id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: event.target.checked } : item //spread oprator
      )
    );
  };

  function handleDelete(id) {
    console.log('clicked', id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className='app'>
        <Header />
        <Form description={description} setDescrption={setDescrption} quantity={quantity} handleAddItem={handleAddItem} setQuantity={setQuantity} />
        <PackingList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <div>
        <h1>🌴🌴Miraj Travel list🌴🌴</h1>
      </div>
    </>
  )
}

function Form({ handleAddItem, setQuantity, description, setDescrption }) {

  // const [checked, setChecked] = useState(false);

  function itemQuantity(event) {
    if (!event.target.value) return;
    setQuantity(event.target.value);
    console.log(event.target.value);
  }

  function handleEvent(event) {
    if (!event.target.value) return;
    setDescrption(event.target.value);
    // console.log(setDescrption.value);
  }
  let option = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return (
    <>
      <form onSubmit={handleAddItem} className='add-form'>What do you need for your trip
        <select onChange={itemQuantity}>
          {/* {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num}>{num}</option>
          ))} */}
          {option.map((num, index) => ( //parenthesis means returning default by react
            <option key={index + num} value={num}>{num}</option>
          ))}
        </select>
        <input type='text' value={description} placeholder='item...' onChange={handleEvent} />
        <button >Add</button>
      </form>
    </>
  )
}

//lift up state(transfer data to child to parent and can be used by other child components)
function PackingList({ items, handleCheck, handleDelete }) {
  return (

    <div className='list'>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type='checkbox'
              checked={item.packed}
              onChange={(event) => handleCheck(event, item.id)}
            />
            <span

              style={
                item.packed
                  ? { textDecoration: 'line-through' }
                  : { textDecoration: 'none' }
              }>

              {item.quantity}{item.description}
            </span>
            <button onClick={() => handleDelete(item.id)}>❌</button>
          </li>

        ))}

      </ul>
    </div >

  );
}


function Footer() {
  return (
    <>
      <div className='stats'>You have X item in your list</div>
    </>
  )
}

export default App;
