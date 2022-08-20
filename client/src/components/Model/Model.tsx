import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TShoppingItem } from "../../types/TShoppingItem";
import FormItem from "../Form/Form";

function UpdateModal({ item }: { item: TShoppingItem }) {
  const [show, setShow] = useState(false);
  const [toUpdate, setToUpdate] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = () => {};
  return (
    <>
      <Button
        variant="dark"
        onClick={() => {
          setToUpdate(false);
          handleShow();
        }}
      >
        שינויים
      </Button>
      <Button
        variant="warning"
        onClick={() => {
          setToUpdate(true);
          handleShow();
        }}
      >
        עריכה
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>מה לעשות?</Modal.Title>
        </Modal.Header>
        {toUpdate ? (
          <Modal.Body>
            <FormItem />
          </Modal.Body>
        ) : (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              סגירה
            </Button>
            <Button variant="primary" onClick={handleClose}>
              {item.isDone ? "לשנות ללא נקנה" : "לשנות לנרכש"}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default UpdateModal;
