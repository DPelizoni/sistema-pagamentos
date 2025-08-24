"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";

import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import NavbarPayments from "@/shared/components/NavbarPayments";
import { apiPayments } from "@/shared/services/apiPayments";
import { formatDate } from "@/shared/utils/dateFormatter";
import { formatToReal } from "@/shared/utils/formatToReal";
import { Payment } from "@/shared/types/Payment";

const paymentsApi = apiPayments<Payment>();

export default function PaymentListPage() {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    async function loadPayments() {
      const data = await paymentsApi.getAll();
      setPayments(data.filter((b: Payment) => b.id));
    }

    loadPayments();
  }, []);

  return (
    <div className="p-6">
      <NavbarPayments />
      <br />
      <br />

      <Link href="/payments/create">
        <Button variant="success">
          <AddBoxOutlinedIcon /> Cadastrar Pagamento
        </Button>
      </Link>
      <hr />

      {/* Tabela */}
      <Table striped size="sm" hover className="mt-1">
        <thead>
          <tr className="table-dark">
            <th>Id</th>
            <th>Mês</th>
            <th>Pagamento</th>
            <th>Modalidade</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Valor</th>
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center">
                Não há registros
              </td>
            </tr>
          ) : (
            payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{formatDate(payment.competencia, "MM/yyyy")}</td>
                <td>{formatDate(payment.data_pagamento)}</td>
                <td>{payment.modalidade}</td>
                <td>{payment.descricao}</td>
                <td>{payment.status}</td>
                <td>{formatToReal(payment.valor)}</td>

                <td className="d-flex justify-content-center">
                  <ButtonGroup className="d-flex gap-2" size="sm">
                    <Link
                      href={`/payments/${payment.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <VisibilityOutlinedIcon fontSize="small" />
                    </Link>

                    <Link
                      href={`/payments/${payment.id}/edit`}
                      className="btn btn-primary btn-sm"
                    >
                      <EditOutlinedIcon fontSize="small" />
                    </Link>

                    <Link
                      href={`/payments/${payment.id}/`}
                      className="btn btn-danger btn-sm"
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </Link>
                  </ButtonGroup>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}
