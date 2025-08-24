export interface Payment {
  id?: string;
  competencia: string;
  data_pagamento: string;
  modalidade: string;
  descricao: string;
  status: string;
  valor: number;
  created_at?: string;
  updated_at?: string;
}
