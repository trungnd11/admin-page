import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function ModalContainer(props: {
  children: JSX.Element;
  title: string;
  show: boolean;
  size?: "lg" | "sm" | "xl";
  type: string | "submit" | "detail";
  style?: React.CSSProperties | undefined;
  fullscreen?: string | true | undefined;
  onHide?: any;
  handleClick?: any;
  cancelBtnTex?: string;
  submitBtnText?: string;
  validation?: any;
}) {
  const { handleClick, ...rest } = props;
  return (
    <Modal
      {...rest}
      animation
      fullscreen={rest.fullscreen}
      style={rest.style}
      size={rest.size || "lg"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {rest.title || "Modal"}
        </Modal.Title>
      </Modal.Header>
      {rest.type === "submit" ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            rest.validation && rest.validation();
            return false;
          }}
        >
          <Modal.Body>{rest.children}</Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-danger"
              style={{ width: "6rem" }}
              onClick={rest.onHide}
            >
              {rest.cancelBtnTex || "Hủy"}
            </button>
            <button
              className="btn btn-success"
              style={{ width: "6rem" }}
              onClick={handleClick}
            >
              {rest.submitBtnText || "Lưu"}
            </button>
          </Modal.Footer>
        </Form>
      ) : (
        <>
          <Modal.Body>{rest.children}</Modal.Body>
          <Modal.Footer className="text-center">
            <button
              className="btn btn-danger"
              style={{ width: "6rem" }}
              onClick={rest.onHide}
            >
              Đóng
            </button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}
