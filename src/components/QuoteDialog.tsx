import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { QuoteForm } from "./QuoteForm";

interface QuoteDialogProps {
  onSubmit: (e: React.FormEvent) => void;
}

export const QuoteDialog = ({ onSubmit }: QuoteDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">Get Quote</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request Quote</DialogTitle>
        </DialogHeader>
        <QuoteForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};