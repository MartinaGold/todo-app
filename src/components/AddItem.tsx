import {Button, Input} from "@material-ui/core";
import React, {useState} from "react";
import {css} from 'emotion';

const classes = {
  addItemContainer: css`
    display: flex;
    justify-content: space-between;
    padding: 30px 0 40px 0;
  `,
  itemInput: css`
    flex-grow: 3;
  `,
  button: css`
    margin-left: 30px !important;
  `,
};

interface AddItemProps {
  onSubmit: (event: any, value: any) => void;
  onDeleteItems: () => void;
}

export const AddItem = ({onSubmit, onDeleteItems}: AddItemProps) => {
  const [newItemValue, setNewItemValue] = useState('');

  return (
    <div className={classes.addItemContainer}>
      <form onSubmit={handleAddItem}>
        <Input placeholder="Item name" className={classes.itemInput} value={newItemValue} onChange={handleInputChange}/>
        <Button variant="contained" color="primary" className={classes.button} type='submit'>
          Add Item
        </Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={onDeleteItems}>
          Delete Item
        </Button>
      </form>
    </div>
  );

  function handleInputChange(event: any) {
    setNewItemValue(event.target.value)
  }

  function handleAddItem(event: any) {
    const id = (new Date()).getTime();

    event.preventDefault();
    onSubmit(event, {id, task: newItemValue});
  }
};

