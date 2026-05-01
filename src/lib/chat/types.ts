export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "void";
  timestamp: Date;
}

export type RecipientName =
  | "Void"
  | "The Wall"
  | "No One"
  | "Private Dump"
  | "Burn Box";
