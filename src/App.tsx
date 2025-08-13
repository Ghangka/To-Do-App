import "./App.css";
import Add from "./components/add";
import List from "./components/list";
import { useShoppingList } from "./state";

function App() {
  const { completed } = useShoppingList();

  return (
    <>
      <div id="components">
        <h1 id="title">To Do App</h1>
        <Add></Add>
        <List></List>
        {completed() ? (
          <p id="status"> You've completed {completed()} items!</p>
        ) : null}
      </div>
    </>
  );
}

export default App;
