import { useMemo } from "react";
import Alert from "../../components/commom/alert/AlertContainer";
import TableContainer from "../../components/commom/table/TableContainer";
import { data } from "./makeData";

export default function TablePage() {
  const columns = useMemo(
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
            width: 300
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
    ],
    []
  );

  const FormSearch = (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-3">
        <input type="text" className="form-control" placeholder="Enter text..." />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <input type="text" className="form-control" placeholder="Enter text..." />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <input type="text" className="form-control" placeholder="Enter text..." />
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
        page={20}
        onChangePage={(page: any) => Alert("success", "Page " + page)}> 
        {FormSearch}
      </TableContainer>
    </div>
  );
}
