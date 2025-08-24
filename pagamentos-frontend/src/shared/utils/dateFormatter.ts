import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (
  dateString: string | undefined,
  formatType: "dd/MM/yyyy" | "MM/yyyy" = "dd/MM/yyyy" // formato padrão
): string => {
  if (!dateString) return "";

  try {
    const date = new Date(dateString);
    return format(date, formatType, { locale: ptBR });
  } catch (error) {
    console.error("Erro ao formatar a data:", error);
    return dateString || "";
  }
};
