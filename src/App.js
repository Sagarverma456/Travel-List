import React, { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./Packaginglist";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Chareger", quantity: 1, packed: false },
// ];
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (!items.length) alert(" add items");
    if (items.length > 0) {
      const confirm = window.confirm(" if you want to delete items");
      confirm && setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />

      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onhandleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
