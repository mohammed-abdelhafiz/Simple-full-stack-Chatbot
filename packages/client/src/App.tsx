import { ChatListView } from "./components/ChatListView";
import { NewChatInput } from "./components/NewChatInput";
import { useEffect, useRef, useState } from "react";
import { cn } from "./lib/utils";
import type { Message } from "./lib/types";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatbotThinking, setIsChatbotThinking] = useState(false);
  const conversationId = useRef(crypto.randomUUID());
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainerElement = scrollContainer.current;
    if (!scrollContainerElement) return;
    scrollContainerElement.scrollTo({
      top: scrollContainerElement.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: crypto.randomUUID(),
        sender: "user",
        content: message,
      },
    ]);

    setIsChatbotThinking(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: message,
          conversation_id: conversationId.current,
        }),
      });
      const data = await res.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: crypto.randomUUID(),
          sender: "chatbot",
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsChatbotThinking(false);
    }
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <section
        className={cn(
          "flex w-full  max-w-2xl flex-col gap-4 p-4",
          messages.length > 0 && "h-full"
        )}
      >
        {messages.length === 0 ? (
          <h1 className="text-2xl text-center">What's on the agenda today?</h1>
        ) : (
          <ChatListView
            messages={messages}
            isChatbotThinking={isChatbotThinking}
            scrollContainer={scrollContainer}
          />
        )}
        <NewChatInput
          handleSend={handleSend}
          isChatbotThinking={isChatbotThinking}
        />
      </section>
    </main>
  );
}

export default App;
