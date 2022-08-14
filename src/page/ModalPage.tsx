import { useState } from "react";
import ModalContainer from "../components/commom/modal/ModalContainer";

export default function ModalPage() {
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("detail");
  const [sizeModal, setSizeModal] = useState("lg");

  const handleOpenModalSubmit = () => {
    setTypeModal("submit");
    setOpenModal(true);
  }

  const handleOpenModalDetail = () => {
    setTypeModal("detail");
    setOpenModal(true);
  }

  const handleOpenModalSmall = () => {
    setTypeModal("detail");
    setSizeModal("sm");
    setOpenModal(true);
  };

  const handleOpenModalLarge = () => {
    setTypeModal("detail");
    setSizeModal("lg");
    setOpenModal(true);
  };

  const From = (
    <>
      <div className="row">
        <div className="col-12 col-lg-2">
          <label htmlFor="">Username</label>
        </div>
        <div className="col-12 col-lg-10">
          <input className="form-control" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-lg-2">
          <label htmlFor="">Password</label>
        </div>
        <div className="col-12 col-lg-10">
          <input className="form-control" />
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="container-fluid mt-4">
        <button
          className="btn btn-success me-3"
          onClick={handleOpenModalSubmit}
        >
          Open Modal Submit
        </button>
        <button
          className="btn btn-primary me-3"
          onClick={handleOpenModalDetail}
        >
          Open Modal Detail
        </button>
        <button className="btn btn-warning me-3" onClick={handleOpenModalSmall}>
          Open Modal Small
        </button>
        <button className="btn btn-danger me-3" onClick={handleOpenModalLarge}>
          Open Modal Large
        </button>
      </div>
      <ModalContainer
        show={openModal}
        onHide={() => setOpenModal(false)}
        title={`Modal ${typeModal}`}
        type={typeModal}
        size={"lg" || sizeModal}
      >
        {From}
      </ModalContainer>
    </>
  );
}
