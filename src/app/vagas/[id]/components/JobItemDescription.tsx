import { LucideIcon } from "lucide-react";

type JobItemDescriptionProps = {
  icon: LucideIcon;
  title: string;
  info: string;
};

export default function JobItemDescription({
  icon: Icon,
  title,
  info,
}: JobItemDescriptionProps) {
  return (
    <aside className="flex items-center space-x-4 rounded-none border border-gray-300">
      <div className="flex h-full w-full max-w-50 items-center gap-2 border-r border-gray-300 px-4 py-3">
        <Icon className="h-5 w-5 text-gray-400" />
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
      </div>

      <p className="py-3 pl-4 text-sm font-medium">{info}</p>
    </aside>
  );
}
