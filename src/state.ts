import React, { useState, createContext, useContext } from "react";

export type ShoppingItem = {
  name: string;
  completed: boolean;
};

type ShoppingListContextType = {
  items: ShoppingItem[];
  loading: boolean;
  getItem: (name: string) => ShoppingItem | undefined;
  allItems: () => ShoppingItem[];
  addItem: (name: string) => void;
  updateCompleted: (name: string, completed: boolean) => void;
  deleteItem: (name: string) => void;
};

const ShoppingListContext = createContext<ShoppingListContextType | undefined>(
  undefined
);

type ShoppingListProviderProps = {
  children: React.ReactNode;
};

export function ShoppingListProvider({ children }: ShoppingListProviderProps) {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [loading] = useState(true);

  const getItem = (name: string) => items.find((i) => i.name === name);

  const allItems = () => items.map((t) => ({ ...t }));

  const sortList = (list: ShoppingItem[]) =>
    [...list].sort((a, b) => a.name.localeCompare(b.name));

  const addItem = (name: string) => {
    setItems((prev) => {
      if (prev.some((item) => item.name === name)) return prev;
      return sortList([...prev, { name, completed: false }]);
    });
  };

  const updateCompleted = (name: string, completed: boolean) => {
    setItems((prev) =>
      prev.map((x) => (x.name === name ? { ...x, completed } : x))
    );
  };

  const deleteItem = (name: string) => {
    setItems((prev) => prev.filter((x) => x.name !== name));
  };

  return React.createElement(
    ShoppingListContext.Provider,
    {
      value: {
        items,
        loading,
        getItem,
        allItems,
        addItem,
        updateCompleted,
        deleteItem,
      },
    },
    children
  );
}

export function useShoppingList() {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error(
      "useShoppingList must be used within a ShoppingListProvider"
    );
  }
  return context;
}
