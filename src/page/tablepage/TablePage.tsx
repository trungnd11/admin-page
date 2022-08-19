import { useMemo } from "react";
import Alert from "../../components/commom/alert/AlertContainer";
import TableContainer, { ColumnType } from "../../components/commom/table/TableContainer";
import { data } from "./makeData";

export default function TablePage() {
  const columns: ColumnType[] = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
            width: 150,
          },
          {
            Header: "Last Name",
            accessor: "lastName",
            width: 300,
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
      {
        Header: "Actions",
        columns: [
          {
            Header: "Detail",
            accessor: "detail",
            Cell: (cell: { row: any }) => (
              <i
                className="fa-solid fa-circle-info text-primary"
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
                onClick={() => Alert("info", JSON.stringify(cell.row.original))}
              />
            ),
          },
        ],
      },
    ],
    []
  );

  const FormSearch = (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-3">
        <input type="text" className="form-control" placeholder="Enter firstname..." />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <input type="text" className="form-control" placeholder="Enter lastname..." />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <input type="text" className="form-control" placeholder="Enter age..." />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="btn btn-success">Search</div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid">
      <TableContainer
        columns={columns}
        data={data}
        bgHeader="success"
        striped
        page={5}
        onChangePage={(page: any) => Alert("success", "Page " + page)}> 
        {FormSearch}
      </TableContainer>
    </div>
  );
}
