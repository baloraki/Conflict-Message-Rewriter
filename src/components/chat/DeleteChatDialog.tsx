"use client";

import Dialog from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

interface DeleteChatDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  translations: {
    title: string;
    body: string;
    keep: string;
    burn: string;
    closeAria: string;
  };
}

export default function DeleteChatDialog({
  open,
  onClose,
  onConfirm,
  translations,
}: DeleteChatDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-xl font-bold text-zinc-100 mb-2">
        {translations.title}
      </h2>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        {translations.body}
      </p>
      <div className="flex gap-3">
        <Button variant="secondary" className="flex-1" onClick={onClose}>
          {translations.keep}
        </Button>
        <Button variant="danger" className="flex-1" onClick={onConfirm}>
          {translations.burn}
        </Button>
      </div>
    </Dialog>
  );
}
