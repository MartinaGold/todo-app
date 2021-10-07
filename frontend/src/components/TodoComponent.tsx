import {AddItem} from "./AddItem";
import {Item, Table} from "./Table";
import React, {useEffect, useState} from "react";
import {GridSelectionModel} from "@material-ui/data-grid";
import {getTodoList} from "../api/actions/getTodoList";

export interface TodoItem {
  id: number;
  task: string;
}

export const TodoComponent = () => {
  const [items, setItems] = useState<TodoItem[]>([ ]);
  const [selectedItems, setSelectedItems] = React.useState<GridSelectionModel>([]);

  useEffect(() => {
    async function getData() {
      let todoList = await getTodoList();
      console.log('foo: ', todoList);
      setItems(todoList);


    }
    getData();

  }, []);

  return (
    <>
      <AddItem onSubmit={handleSubmitItem} onDeleteItems={deleteItems}
               isDeleteItemVisible={selectedItems.length === 0}/>
      <Table items={items} selectedItems={selectedItems} onSelectItem={handleSelectionChange}/>
    </>
  );

  function handleSubmitItem(event: any, newItem: Item) {
    event.preventDefault();
    setItems((prevState => ([...prevState, newItem])));
  }

  function handleSelectionChange(items: any) {
    setSelectedItems(items)
  }

  function deleteItems() {
    const newItems = items.filter((item: any) => !selectedItems.includes(item.id));
    setItems(newItems)
  }
};