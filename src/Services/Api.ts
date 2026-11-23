import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as
      | { message?: string; errors?: Array<{ message?: string }> }
      | undefined;

    const validationMessages = data?.errors
      ?.map((item) => item.message)
      .filter(Boolean)
      .join(" ");

    return validationMessages || data?.message || "Falha na requisição.";
  }

  return "Ocorreu um erro inesperado.";
}