"use client";

import Dialog from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

interface DeleteChatDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteChatDialog({
  open,
  onClose,
  onConfirm,
}: DeleteChatDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-xl font-bold text-zinc-100 mb-2">
        Delete this chat?
      </h2>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        This will erase the entire conversation from this screen. Nothing can be
        recovered. It was never stored anywhere.
      </p>
      <div className="flex gap-3">
        <Button variant="secondary" className="flex-1" onClick={onClose}>
          Keep it
        </Button>
        <Button variant="danger" className="flex-1" onClick={onConfirm}>
          🔥 Burn it
        </Button>
      </div>
    </Dialog>
  );
}
