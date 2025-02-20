"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { jobRegistrationFormSchema } from "@/schemas";
import CustomFormField from "@/components/ui/layout/CustomFormItem";
import { createJob } from "../actions";
import { useFormState } from "react-dom";
import { CircleAlert } from "lucide-react";

export default function CadastroPage() {
  // // 1. Define your form.
  const form = useForm<z.infer<typeof jobRegistrationFormSchema>>({
    resolver: zodResolver(jobRegistrationFormSchema),
    defaultValues: {
      title: "",
      company: "",
      company_website: "",
      city: "",
      schedule: undefined,
      salary: undefined,
      description: "",
      requirements: "",
      number_of_positions: undefined,
    },
  });

  // function onSubmit(values: z.infer<typeof jobRegistrationFormSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }

  const [state, createJobAction, pending] = useFormState(createJob, null);

  return (
    <>
      <h1 className="font-display pb-12 text-3xl font-black">Cadastrar Vaga</h1>
      <Card className="p-12">
        {state?.error && (
          <div className="flex items-center gap-4 rounded-md border border-red-200 bg-red-200 p-4 py-6 text-red-900">
            <CircleAlert className="inline-block h-6 w-6" />
            {state.message}
          </div>
        )}
        <Form {...form}>
          <form action={createJobAction} className="space-y-8">
            <CustomFormField
              control={form.control}
              name="title"
              label="Título da Vaga"
              description="Este será o título da vaga que será exibido na busca.
                      Máximo de 30 caracteres"
            />
            <Separator className="my-4" />
            <CustomFormField
              control={form.control}
              name="company"
              label="Nome da Empresa"
              description="Nome da empresa que será exibido na busca. Não é
                      necessário colocar a razão social."
            />
            <Separator className="my-4" />
            <CustomFormField
              control={form.control}
              name="company_website"
              label="Website da Empresa"
              description="Website - se a vaga trouxer um site próprio, coloque aqui."
            />
            <Separator className="my-4" />
            <CustomFormField
              control={form.control}
              name="city"
              label="Cidade"
              description="Coloque a cidade em que a vaga é oferecida. Se for remoto,
                      preencha com ”remoto”"
            />
            <Separator className="my-4" />
            <CustomFormField
              control={form.control}
              name="schedule"
              label="Período"
              description="Escolha entre meio-período ou período integral"
              options={[
                { value: "full-time", label: "Período Integral" },
                { value: "part-time", label: "Meio Período" },
              ]}
              type="select"
            />
            <Separator className="my-4" />
            <CustomFormField
              control={form.control}
              name="salary"
              label="Salário"
              description="Salário mensal"
            />
            <Separator className="my-4" />
            <CustomFormField
              control={form.control}
              name="number_of_positions"
              label="Número de vagas"
              description="Número de vagas"
              type="number"
            />
            <Separator className="my-4" />
            <CustomFormField
              control={form.control}
              name="description"
              label="Descrição da Vaga"
              description="Coloque em detalhes as principais tarefas esperadas nesta
                      vaga."
              type="textarea"
            />
            <Separator className="my-4" />
            <CustomFormField
              control={form.control}
              name="requirements"
              label="Requisitos"
              description="O que você espera do seu candidato? Detalhe aqui."
              type="textarea"
            />

            <Button
              type="submit"
              className="ml-auto cursor-pointer"
              disabled={pending}
            >
              {pending ? "Salvando..." : "Salvar"}
            </Button>
          </form>
        </Form>
      </Card>
    </>
  );
}
