"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { deleteJob } from "../../actions";

type DeleteJobButtonProps = {
  jobId: string;
};

export default function DeleteJobDialog({ jobId }: DeleteJobButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer rounded-none border-red-400 px-6 py-3 text-red-500 hover:bg-red-200 hover:text-red-500"
        >
          Apagar Vaga
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apagar Vaga</DialogTitle>
          <DialogDescription>
            Você está prestes a apagar essa vaga, deseja mesmo continuar?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <form action={deleteJob}>
            <input type="hidden" name="id" value={jobId} />
            <Button
              variant="outline"
              className="cursor-pointer rounded-none border-red-500 text-red-500 hover:bg-red-200 hover:text-red-500"
            >
              Confirmar
            </Button>
          </form>
          <DialogClose asChild>
            <Button
              variant="outline"
              className="cursor-pointer rounded-none border-1"
            >
              Cancelar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
