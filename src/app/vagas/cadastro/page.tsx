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

export default function CadastroPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof jobRegistrationFormSchema>>({
    resolver: zodResolver(jobRegistrationFormSchema),
    defaultValues: {
      title: "",
      company: "",
      websiteCompany: "",
      city: "",
      workingPeriod: undefined,
      salary: undefined,
      description: "",
      requirements: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof jobRegistrationFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <h1 className="pb-12 text-3xl font-black">Cadastrar Vaga</h1>
      <Card className="p-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              name="websiteCompany"
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
              name="workingPeriod"
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

            <Button type="submit" className="cursor-pointer">
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
