type modalidadeOptions = 'Débito' | 'Crédito';
type statusOptions = 'Pendente' | 'Pago';

export interface Payment {
  id?: string;
  competencia: string;
  data_pagamento: string;
  modalidade: modalidadeOptions;
  descricao: string;
  status: statusOptions;
  valor: number;
  created_at?: string;
  updated_at?: string;
}
