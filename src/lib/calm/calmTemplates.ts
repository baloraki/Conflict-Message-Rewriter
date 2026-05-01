import { CalmTemplate } from "./types";

export const CALM_TEMPLATES: CalmTemplate[] = [
  {
    situation: "say-no",
    label: "I need to say no",
    templates: [
      "I'm not able to take this on right now.",
      "I need to decline this. I hope you understand.",
      "That doesn't work for me. I can't commit to that.",
      "I'm at capacity right now and can't add more.",
      "I've thought about it and the answer is no.",
      "I'm going to have to pass on this one.",
    ],
  },
  {
    situation: "set-boundary",
    label: "I need to set a boundary",
    templates: [
      "I need to be clear: this kind of conversation isn't something I can continue.",
      "I'm not comfortable with this. I need you to stop.",
      "I care about our relationship, but this particular thing is a hard boundary for me.",
      "I need to set a limit here. I won't engage with this further.",
      "Going forward, I need this to stop.",
      "I'm setting a boundary here and I need you to respect it.",
    ],
  },
  {
    situation: "ask-for-space",
    label: "I need to ask for space",
    templates: [
      "I need some time before I can respond properly.",
      "I hear you. I need space before replying.",
      "I'm not in the right headspace to have this conversation now. Can we revisit it later?",
      "I need a few days to process this before I respond.",
      "Please give me some time. I'll come back to this when I'm ready.",
      "I think it's better if we pause this conversation for now.",
    ],
  },
  {
    situation: "apologize",
    label: "I need to apologize",
    templates: [
      "I was wrong to react the way I did. I'm sorry.",
      "I understand why that upset you. I'm genuinely sorry.",
      "I said something I didn't mean, and I regret it. I'm sorry.",
      "My reaction wasn't fair to you. I apologize.",
      "I handled that badly. I'm sorry for the way I spoke to you.",
      "I want to acknowledge that I hurt you, and I'm sorry.",
    ],
  },
  {
    situation: "reply-professionally",
    label: "I need to reply professionally",
    templates: [
      "Thank you for your message. I'll review this and follow up shortly.",
      "I understand your concern. Let me look into this and get back to you.",
      "I appreciate you raising this. I'll respond with more detail once I've had time to review.",
      "I hear your point. I see this differently, but I'm open to discussing it further.",
      "I've noted what you've shared. I'll respond once I've had time to think it through.",
      "I understand your point, but I see this differently.",
    ],
  },
  {
    situation: "end-conversation",
    label: "I need to end a conversation",
    templates: [
      "I don't want to continue this conversation while emotions are high.",
      "I think we've reached a point where continuing won't help either of us.",
      "I'm going to step away from this conversation now.",
      "This isn't productive right now. Let's stop here.",
      "I think it's best if we end this here for today.",
      "I'm not able to continue this conversation right now. We can revisit it another time.",
    ],
  },
  {
    situation: "not-reply",
    label: "I need to not reply",
    templates: [
      "Sometimes not replying is the right reply.",
      "Not every message deserves a response right now.",
      "Silence is a complete response.",
      "You don't owe an immediate response to every message.",
      "Choosing not to reply is a valid boundary.",
      "Sometimes the kindest thing is to wait, or say nothing at all.",
    ],
  },
  {
    situation: "ask-clarification",
    label: "I need to ask for clarification",
    templates: [
      "I want to make sure I understand correctly before I respond. Could you clarify what you meant?",
      "I'm not sure I interpreted that the way you intended. Can you say more?",
      "Before I respond, can you help me understand what you're asking?",
      "I don't want to assume. Can you clarify what you mean?",
      "I want to respond thoughtfully. What specifically are you referring to?",
      "Can you help me understand what you need from me here?",
    ],
  },
];
