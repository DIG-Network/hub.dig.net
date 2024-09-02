import { Table as FlowbiteTable, TableBodyProps, TableCellProps, TableProps, TableRowProps } from 'flowbite-react';

function Table({ children, ...props }: TableProps) {
  return <FlowbiteTable {...props}>{children}</FlowbiteTable>;
}

function Body({ children, ...props }: TableBodyProps) {
  return <FlowbiteTable.Body {...props}>{children}</FlowbiteTable.Body>;
}

function Row({ children, ...props }: TableRowProps) {
  return <FlowbiteTable.Row {...props}>{children}</FlowbiteTable.Row>;
}

function Cell({ children, ...props }: TableCellProps) {
  return <FlowbiteTable.Cell {...props}>{children}</FlowbiteTable.Cell>;
}

Table.Row = Row;
Table.Cell = Cell;
Table.Body = Body;

export { Table };
