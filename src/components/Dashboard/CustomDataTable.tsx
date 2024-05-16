import React from "react";
import DataTable, { TableProps } from "react-data-table-component";
import { FaSort } from "react-icons/fa";

const sortIcon = <FaSort />;
const selectProps = {
  indeterminate: (isIndeterminate: boolean) => isIndeterminate,
};

function DataTableBase<T>(props: TableProps<T>): JSX.Element {
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
      },
    },
    headCells: {
      style: {
        backgroundColor: "rgb(243 244 246)",
        marginInline: "2px",
        paddingBlock: "12px",
        borderRadius: "5px",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  };

  return (
    <DataTable
      pagination
      customStyles={customStyles}
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      dense
      {...props}
    />
  );
}

export default DataTableBase;
