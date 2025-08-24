"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, ButtonGroup, Form } from "react-bootstrap";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";

import apiPayments from "../services/apiPayments";
import { FormValues, paymentSchema } from "../schema/paymentSchema";
import { Payment } from "../types/Payment";
import { FormProps } from "../types/FormProps";
import { useEffect } from "react";

const paymentsApi = apiPayments<Payment>();

export default function FormPayament({ initialData }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(paymentSchema),
  });

  const router = useRouter();

  // 1. Usar useEffect para pré-preencher o formulário
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  // 2. Lógica de envio que decide entre criar e atualizar
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      if (initialData?.id) {
        // Modo de Edição: Chama a API de atualização (PUT/PATCH)
        await paymentsApi.update(initialData.id, data);
        alert("Pagamento atualizado com sucesso!");
      } else {
        // Modo de Cadastro: Chama a API de criação (POST)
        await paymentsApi.create(data);
        alert("Pagamento cadastrado com sucesso!");
      }
      router.push("/payments");
    } catch (error) {
      console.error("Erro na operação:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <Form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded shadow-sm bg-white col-3"
    >
      <h2 className="mb-4">
        {initialData ? "Editar Pagamento" : "Cadastrar Pagamento"}
      </h2>

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
          {initialData ? "Salvar Alterações" : "Cadastrar"}
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
