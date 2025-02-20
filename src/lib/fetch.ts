'use server'

import { z } from "zod";

export async function fetchValidatedData<T>(url: string, schema: z.ZodSchema<T>): Promise<T> {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.statusText}`);
  }

  const data = await response.json();
  return schema.parse(data.data); // Valida e tipa os dados
}