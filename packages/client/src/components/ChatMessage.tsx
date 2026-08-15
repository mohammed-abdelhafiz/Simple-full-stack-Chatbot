import type { Message } from "../lib/types";
import { cn } from "../lib/utils";
interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "w-fit rounded-2xl px-3 py-1 text-sm wrap-anywhere",
        message.sender === "user"
          ? "ml-auto rounded-br-none bg-muted"
          : "rounded-bl-none bg-primary text-primary-foreground",
        message.id === "thinking" && " animate-pulse"
      )}
    >
      {message.content}
    </div>
  );
};
