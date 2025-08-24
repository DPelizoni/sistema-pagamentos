"use client";

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonGroup, Form } from "react-bootstrap";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";

import apiPayments from "../services/apiPayments";
import { FormValues, paymentSchema } from "../schema/paymentSchema";
import { Payment } from "../types/Payment";

const paymentsApi = apiPayments<Payment>();

export default function FormPayament() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(paymentSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data: Payment) => {
    paymentsApi.create(data);
    alert("Pagamento cadastrado com sucesso!");
    reset(); 
  };

  return (
    <Form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded shadow-sm bg-white"
    >
      <h2 className="mb-4">Formulário de Pagamento</h2>

      {/* Competência */}
      <Form.Group className="mb-3">
        <Form.Label>Competência</Form.Label>
        <Form.Control
          type="date"
          isInvalid={!!errors.competencia}
          {...register("competencia")}
        />
        <Form.Control.Feedback type="invalid">
          {errors.competencia?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Data de Pagamento */}
      <Form.Group className="mb-3">
        <Form.Label>Data de Pagamento</Form.Label>
        <Form.Control
          type="date"
          isInvalid={!!errors.data_pagamento}
          {...register("data_pagamento")}
        />
        <Form.Control.Feedback type="invalid">
          {errors.data_pagamento?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Modalidade */}
      <Form.Group className="mb-3">
        <Form.Label>Modalidade</Form.Label>
        <Form.Select
          isInvalid={!!errors.modalidade}
          {...register("modalidade")}
        >
          <option value="">Selecione...</option>
          <option value="Débito">Débito</option>
          <option value="Crédito">Crédito</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.modalidade?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Descrição */}
      <Form.Group className="mb-3">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          type="text"
          isInvalid={!!errors.descricao}
          {...register("descricao")}
        />
        <Form.Control.Feedback type="invalid">
          {errors.descricao?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Status */}
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select isInvalid={!!errors.status} {...register("status")}>
          <option value="">Selecione...</option>
          <option value="Pendente">Pendente</option>
          <option value="Pago">Pago</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.status?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Valor */}
      <Form.Group className="mb-3">
        <Form.Label>Valor</Form.Label>
        <Form.Control
          type="number"
          step="0.01"
          isInvalid={!!errors.valor}
          {...register("valor")}
        />
        <Form.Control.Feedback type="invalid">
          {errors.valor?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <ButtonGroup className="d-flex gap-2" size="sm">
        <Button variant="primary" type="submit">
          <CheckIcon />
          Salvar
        </Button>

        <Button variant="secondary">
          <Link href="/" className="text-white text-decoration-none">
            <ArrowBackIcon /> Retornar
          </Link>
        </Button>
      </ButtonGroup>
    </Form>
  );
}
