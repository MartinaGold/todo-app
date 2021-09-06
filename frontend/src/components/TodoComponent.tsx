import {AddItem} from "./AddItem";
import {Item, Table} from "./Table";
import React, {useState} from "react";
import {GridSelectionModel} from "@material-ui/data-grid";

export interface TodoItem {
  id: number;
  task: string;
}

const mockedItems: TodoItem[] = [
  {id: 1, task: 'Vacuuming'},
  {id: 2, task: 'Washing dishes'},
  {id: 3, task: 'Feeding pets'},
  {id: 4, task: 'Preparing meals'},
  {id: 5, task: 'Doing laundry'},
  {id: 6, task: 'Sweeping'},
  {id: 7, task: 'Dusting'},
];


export const TodoComponent = () => {
  const [items, setItems] = useState<TodoItem[]>(mockedItems);
  const [selectedItems, setSelectedItems] = React.useState<GridSelectionModel>([]);
  return (
    <>
      <AddItem onSubmit={handleSubmitItem} onDeleteItems={deleteItems} isDeleteItemVisible={selectedItems.length === 0}/>
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