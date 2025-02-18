import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../../input";
import { Control, ControllerRenderProps, FieldPath } from "react-hook-form";
import { jobRegistrationFormSchema } from "@/schemas";
import { z } from "zod";
import { Textarea } from "../../textarea";

type FormSchemaType = z.infer<typeof jobRegistrationFormSchema>;

type CustomFormFieldProps = {
  control: Control<FormSchemaType>;
  name: FieldPath<FormSchemaType>;
  label: string;
  description?: string;
  type?: "select" | "input" | "textarea";
  options?: { label: string; value: string }[];
};

export default function CustomFormField({
  control,
  label,
  description,
  name,
  type = "input",
  options,
  ...props
}: CustomFormFieldProps) {
  const formItem = (field: ControllerRenderProps<FormSchemaType>) => {
    switch (type) {
      case "input":
        return (
          <FormControl>
            <Input {...field} />
          </FormControl>
        );
      case "select":
        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "textarea":
        return (
          <FormControl>
            <Textarea {...field} />
          </FormControl>
        );
      default:
        return null;
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex justify-between">
          <div className="max-w-xs flex-1">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
          <div className="max-w-xs flex-1">
            {formItem(field)}

            <FormMessage />
          </div>
        </FormItem>
      )}
      {...props}
    />
  );
}
