import "./shoppingItem.css";
import { useRef } from "react";
import {
  type ShoppingItem as ShoppingItemType,
  useShoppingList,
} from "../state";

type ShoppingItemProps = {
  item: ShoppingItemType;
};

export default function ShoppingItem({ item }: ShoppingItemProps) {
  const labelRef = useRef<HTMLLabelElement>(null);
  // const numRef = useRef<HTMLInputElement>(null);

  const { updateCompleted, deleteItem } = useShoppingList();

  return (
    <div id="shoppingItem">
      <div id="left-side">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => updateCompleted(item.name, !item.completed)}
        />
        <div id="label">
          <label ref={labelRef} className={item.completed ? "checked" : ""}>
            {item.name}
          </label>
        </div>
      </div>
      <div id="right-side">
        <button className="remove-btn" onClick={() => deleteItem(item.name)}>
          🗑️
        </button>
      </div>
    </div>
  );
}
