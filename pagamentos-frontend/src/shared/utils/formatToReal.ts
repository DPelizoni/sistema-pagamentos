export const formatToReal = (value: string | number): string => {
  const numberValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numberValue)) {
    return ""; 
  }

  return numberValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
