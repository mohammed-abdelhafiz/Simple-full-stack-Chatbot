import type { Message } from "../lib/types";
import { ChatMessage } from "./ChatMessage";
import type { RefObject } from "react";

interface ChatListViewProps {
  messages: Message[];
  isChatbotThinking: boolean;
  scrollContainer: RefObject<HTMLDivElement | null>;
}
export const ChatListView = ({
  messages,
  isChatbotThinking,
  scrollContainer,
}: ChatListViewProps) => {
  return (
    <section
      ref={scrollContainer}
      className="flex-1 overflow-y-auto py-12 scrollbar-none space-y-4"
    >
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {isChatbotThinking && (
        <ChatMessage
          message={{
            id: "thinking",
            sender: "chatbot",
            content: "Thinking...",
          }}
        />
      )}
    </section>
  );
};
