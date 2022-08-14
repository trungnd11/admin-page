import Alert, { AlertComfirm } from "../components/commom/alert/AlertContainer";

export default function AlertPage() {

  // const getData = async () => {
  //   const res = await axios.get("https://huyentrangbeautycenter.herokuapp.com/phone");
  //   return res;
  // }

  // const handlePromise = () => {
    
  // }

  return (
    <div className="container-fluid mt-4">
      <button
        className="btn btn-success me-3"
        style={{ width: "7rem" }}
        onClick={() => Alert("success", "Complete")}
      >
        Success
      </button>
      <button
        className="btn btn-danger me-3"
        style={{ width: "7rem" }}
        onClick={() => Alert("error", "Error")}
      >
        Error
      </button>
      <button
        className="btn btn-info me-3"
        style={{ width: "7rem" }}
        onClick={() => Alert("info", "Info")}
      >
        Info
      </button>
      <button
        className="btn btn-warning me-3"
        style={{ width: "7rem" }}
        onClick={() => Alert("warning", "Warning")}
      >
        Warning
      </button>
      <button
        className="btn btn-primary me-3"
        style={{ width: "7rem" }}
        onClick={() =>
          AlertComfirm("Xoá ngay", "Bạn có chắn chăn muốn xoá", () =>
            Alert("success", "Complete")
          )
        }
      >
        Confirm
      </button>
      {/* <button
        className="btn btn-danger me-3"
        style={{ width: "7rem" }}
        onClick={handlePromise}
      >
        Promise
      </button> */}
    </div>
  );
}
