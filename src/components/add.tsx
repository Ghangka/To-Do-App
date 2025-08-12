import { useState } from "react";
import "./add.css";
import { useShoppingList } from "../state";

export default function Add() {
  const [value, setValue] = useState("");

  const { addItem } = useShoppingList();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.value;

    // Disallow starting with space
    if (name.startsWith(" ")) {
      setValue("");
      return;
    }

    // Disallow numbers
    if (/\d/.test(name)) {
      setValue("");
      return;
    }

    // Remove all non-letters/spaces
    name = name.replace(/[^A-Za-z\s]/g, "");
    setValue(name);
  };

  function handleSubmit() {
    if (!value.trim()) return;
    // Default quantity = 1, category = "Other" (you can adjust this)
    addItem(value.trim());
    setValue("");
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div id="add">
      <input
        type="text"
        placeholder="What do you need to do"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSubmit}>Add Item ➕</button>
    </div>
  );
}
