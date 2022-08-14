import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

export default function Alert(
  status: "success" | "error" | "info" | "warning" | "promise",
  title: string
) {
  return (
    <div>
      {!status
        ? toast(title)
        : status === "success"
        ? toast.success(title)
        : status === "error"
        ? toast.error(title)
        : status === "info"
        ? toast.info(title)
        : status === "warning"
        ? toast.warning(title)
        : status === "promise"}
    </div>
  );
}

export const AlertPromise = (prop: {
  callback: Promise<AxiosResponse<any, any>>;
  pending?: string;
  success?: string;
  error?: string;
}) => {
  const { callback, pending, success, error } = prop;
  toast.promise(callback, {
    pending: pending || "Loading",
    success: success || "Got the data",
    error: error || "Error when fetching",
  });
};

export const AlertComfirm = (
  alertMessage: string,
  message: string,
  callback: Function,
  callbackCancel?: Function
) => {
  Swal.fire({
    title: alertMessage,
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Xoá ngay",
    cancelButtonText: "Không xoá",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    } else if (result.isDismissed) {
      callbackCancel && callbackCancel();
    }
  });
};
