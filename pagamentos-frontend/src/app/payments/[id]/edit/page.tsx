import FormPayament from "@/shared/components/FormPayment";
import { apiPayments } from "@/shared/services/apiPayments";
import { Payment } from "@/shared/types/Payment";

const paymentsApi = apiPayments<Payment>();

interface EditPageProps {
  params: { id: string };
}

export default async function EditPaymentPage({ params }: EditPageProps) {
  const paymentToEdit = await paymentsApi.getById(params.id);

  if (!paymentToEdit) {
    return <div>Pagamento não encontrado.</div>;
  }

  return (
    <div>
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <FormPayament initialData={paymentToEdit} />
      </main>
    </div>
  );
}
