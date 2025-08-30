"use client";

import Link from "next/link";
import { ButtonGroup, Card } from "react-bootstrap";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Payment } from "@/shared/types/Payment";
import { formatDate } from "@/shared/utils/dateFormatter";
import { formatToReal } from "@/shared/utils/formatToReal";

interface ClientPaymentProps {
  payment: Payment;
}

export default function ClientDetailPayment({ payment }: ClientPaymentProps) {
  return (
    <Card className="p-4 shadow-lg col-4 mt-5 mx-auto bg-light">
      <Card.Body>
        <Card.Title className="text-center mb-4">
          Detalhes do Pagamento
        </Card.Title>
        <hr />

        <div className="d-grid gap-2">
          <h2 className="text-danger">{payment.descricao}</h2>
          <p>
            <strong>ID:</strong> {payment.id}
          </p>
          <p>
            <strong>Valor:</strong> {formatToReal(payment.valor)}
          </p>
          <p>
            <strong>Competência:</strong>{" "}
            {formatDate(payment.competencia, "MM/yyyy")}
          </p>
          <p>
            <strong>Data de Pagamento:</strong>{" "}
            {formatDate(payment.data_pagamento)}
          </p>
          <p>
            <strong>Modalidade:</strong> {payment.modalidade}
          </p>
          <p>
            <strong>Status:</strong> {payment.status}
          </p>
          <p>
            <strong>Criado em:</strong>{" "}
            {formatDate(payment.created_at, "dd/MM/yyyy - HH:mm:ss")}
          </p>
          <p>
            <strong>Atualizado em:</strong>{" "}
            {formatDate(payment.updated_at, "dd/MM/yyyy - HH:mm:ss")}
          </p>
          <hr />

          <ButtonGroup className="d-flex gap-2" size="sm">
            <Link href="/payments" className="btn btn-secondary btn-sm">
              <ArrowBackIcon fontSize="small"/> Retornar
            </Link>

            <Link
              href={`/payments/${payment.id}/edit`}
              className="btn btn-primary btn-sm"
            >
              <EditOutlinedIcon fontSize="small" /> Editar
            </Link>

          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
}
