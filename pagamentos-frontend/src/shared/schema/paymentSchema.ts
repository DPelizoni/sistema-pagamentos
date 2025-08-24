import * as yup from "yup";

type statusOptions = "Pendente" | "Pago";
type modalidadeOptions = "Débito" | "Crédito";

export interface FormValues {
  competencia: string;
  data_pagamento: string;
  modalidade: modalidadeOptions;
  descricao: string;
  status: statusOptions;
  valor: number;
}

export const paymentSchema = yup.object().shape({
  competencia: yup
    .string()
    .required("A competência é obrigatória"),

  data_pagamento: yup
    .string()
    .required("A data de pagamento é obrigatória"),

  modalidade: yup
    .string<modalidadeOptions>()
    .oneOf(["Débito", "Crédito"], "A modalidade deve ser Débito ou Crédito")
    .required("A modalidade é obrigatória"),

  descricao: yup
    .string()
    .required("A descrição é obrigatória")
    .min(3, "A descrição deve ter pelo menos 3 caracteres"),

  status: yup
    .string<statusOptions>()
    .oneOf(["Pendente", "Pago"], "O status deve ser Pendente ou Pago")
    .required("O status é obrigatório"),

  valor: yup
    .number()
    .required("O valor é obrigatório")
    .positive("O valor deve ser um número positivo")
    .min(0.01, "O valor deve ser maior que zero")
    .typeError("O valor deve ser um número"),
});
