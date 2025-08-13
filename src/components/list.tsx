import "./list.css";
import ShoppingItem from "./shoppingItem";
import { useShoppingList } from "../state";

export default function List() {
  const { items } = useShoppingList();
  return (
    <div id="list">
      {items.map((item) => (
        <ShoppingItem key={item.name} item={item} />
      ))}
    </div>
  );
}
