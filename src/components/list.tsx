import "./list.css";
import ShoppingItem from "./shoppingItem";
import { useShoppingList } from "../state";

export default function List() {
  const { items } = useShoppingList();
  return (
    <div id="list">
      <div id="Dairy">
        {/* <p className="title">TO DOS</p> */}
        {items.map((item) => (
          <ShoppingItem key={item.name} item={item} />
        ))}
        <ShoppingItem
          item={{
            name: "asdfas",
            // quantity: 0,
            // category: "",
            completed: true,
          }}
        ></ShoppingItem>
        <ShoppingItem
          item={{
            name: "asdfas",
            completed: true,
          }}
        ></ShoppingItem>
        <ShoppingItem
          item={{
            name: "asdfas",
            completed: true,
          }}
        ></ShoppingItem>
      </div>
    </div>
  );
}
