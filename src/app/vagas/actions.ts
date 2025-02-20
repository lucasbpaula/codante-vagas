"use server";

import { Job } from "@/types/job";
import { notFound, redirect } from "next/navigation";

export async function getJobs() {
  const response = await fetch("https://apis.codante.io/api/job-board/jobs");

  if (!response.ok) {
    throw new Error("Ooops algo deu errado");
  }

  const data = await response.json();

  return data.data as Job[];
}

export async function getJobById(id: string) {
  const response = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${id}`,
  );

  if (!response.ok) {
    return notFound();
  }

  const data = await response.json();

  return data.data as Job;
}

export async function deleteJob(formData: FormData) {
  const id = formData.get("id");

  const response = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${id}`,
    { method: "DELETE" },
  );

  if (!response.ok) {
    throw new Error("Não foi possível deletar essa vaga.");
  }

  redirect("/vagas");
}

export async function resetJob() {
  const response = await fetch(`https://apis.codante.io/api/job-board/reset`);

  if (response.ok) {
    console.log("Reset feito com sucesso");
  } else {
    console.log("Erro ao resetar");
  }
}

export async function createJob(_prevState: any, formData: FormData) {
  console.log("formData", formData);
  const response = await fetch(`https://apis.codante.io/api/job-board/jobs`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return {
      error: true,
      message: (await response.json()).message,
    };
  }

  redirect("/vagas");
}
