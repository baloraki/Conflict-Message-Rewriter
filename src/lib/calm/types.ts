export type CalmSituation =
  | "say-no"
  | "set-boundary"
  | "ask-for-space"
  | "apologize"
  | "reply-professionally"
  | "end-conversation"
  | "not-reply"
  | "ask-clarification";

export interface CalmTemplate {
  situation: CalmSituation;
  label: string;
  templates: string[];
}
