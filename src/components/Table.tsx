import React from "react";
import {DataGrid, GridColDef, GridSelectionModel} from '@material-ui/data-grid';
import {css} from "emotion";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'task',
    headerName: 'Task',
    width: 150,
    editable: true,
  },
];

const classes = {
  tableContainer: css`
    height: 500px;
    width: 100%;
  `,
};

export interface Item {
  id: number;
  task: string;
}

interface TableProps {
  items: Item[];
  selectedItems: any;
  onSelectItem: (item: any) => void;
}

export const Table = ({items, selectedItems, onSelectItem}: TableProps) => {
  return (
    <div className={classes.tableContainer}>
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={onSelectItem}
        selectionModel={selectedItems}
      />
    </div>
  )


};