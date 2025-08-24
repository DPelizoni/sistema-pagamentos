import { apiPayments } from "@/shared/services/apiPayments"; // Verifique o caminho
import { Payment } from "@/shared/types/Payment"; // Verifique o caminho
import ClientDetailPayment from "./ClientDetailPayment";

interface PaymentPageProps {
  params: { id: string };
}

const paymentsApi = apiPayments<Payment>();

// Componente de servidor assíncrono para buscar os dados
export default async function DetailPayment({ params }: PaymentPageProps) {
  const payment = await paymentsApi.getById(params.id);

  if (!payment) {
    return <div>Pagamento não encontrado.</div>;
  }

  // Passa os dados do pagamento para o Client Component
  return <ClientDetailPayment payment={payment} />;
}
