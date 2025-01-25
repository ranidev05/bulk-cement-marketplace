import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { QuoteForm } from "./QuoteForm";
import { X } from "lucide-react";

interface QuoteDialogProps {
  onSubmit: (e: React.FormEvent) => void;
}

export const QuoteDialog = ({ onSubmit }: QuoteDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white border-0"
        >
          Get Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="bg-[#F97316] text-white p-4 rounded-t-lg relative">
          <DialogTitle className="text-2xl">Get Quote</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-full p-1 hover:bg-white/20">
            <X className="h-5 w-5" />
          </DialogClose>
        </DialogHeader>
        <QuoteForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};