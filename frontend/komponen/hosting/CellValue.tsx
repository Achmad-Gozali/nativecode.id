import { Check, X } from 'lucide-react';

export function CellValue({ val }: { val: boolean | string }) {
  if (typeof val === 'boolean') {
    return val
      ? <Check className="h-4 w-4 text-[#5D9C76] mx-auto" />
      : <X className="h-4 w-4 text-red-400 mx-auto" />;
  }
  return <span className="text-gray-700 font-medium text-xs">{val}</span>;
}