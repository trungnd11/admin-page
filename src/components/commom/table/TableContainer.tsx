import React from "react";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useTable } from "react-table";
import { TableStyle } from "../table/StyledTable";

interface ColumnType {
  Header: string;
  accessor?: string;
  Cell?: any;
  width?: number;
  columns?: ColumnType[];
}

export default function TableContainer(props: {
  columns: ColumnType[];
  data: any[];
  children?: JSX.Element;
  bgHeader?:
    | "success"
    | "danger"
    | "primary"
    | "secondary"
    | "dark"
    | "warning"
    | "info";
  variant?:
    | "success"
    | "danger"
    | "primary"
    | "secondary"
    | "dark"
    | "warning"
    | "info";
  striped?: boolean;
  page?: number;
  onChangePage?: Function;
}) {
  const { columns, data, bgHeader, variant, striped, page, onChangePage, children } = props;

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
    <React.Fragment>
      <TableStyle>
        {children && <div className="container-fluid my-5">{children}</div>}
        <Table
          striped={striped}
          hover
          variant={variant}
          {...getTableProps()}
          className={``}
        >
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr
                className={`bg-${bgHeader}`}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column: any) => (
                  <td
                    className={
                      bgHeader === "success" ||
                      bgHeader === "primary" ||
                      bgHeader === "secondary" ||
                      bgHeader === "danger" ||
                      bgHeader === "dark"
                        ? "text-white"
                        : "text-dark"
                    }
                    {...column.getHeaderProps({
                      style: { width: column.width },
                    })}
                  >
                    {column.render("Header")}
                  </td>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => (
                    <th {...cell.getCellProps()}>{cell.render("Cell")}</th>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
        {page && (
          <div className="page-container">
            <ReactPaginate
              onPageChange={({ selected }) =>
                onChangePage && onChangePage(selected)
              }
              nextLabel="Tiếp >"
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              pageCount={page}
              previousLabel="< Trước"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        )}
      </TableStyle>
    </React.Fragment>
  );
}
