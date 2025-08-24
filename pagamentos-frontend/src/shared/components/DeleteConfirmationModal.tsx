"use client";

import { Modal, Button } from "react-bootstrap";

interface DeleteConfirmationModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  title: string;
  body: string;
}

export default function DeleteConfirmationModal({
  show,
  onHide,
  onConfirm,
  title,
  body,
}: DeleteConfirmationModalProps) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
