import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

interface NewChatInputProps {
  handleSend: (message: string) => void;
  isChatbotThinking: boolean;
}

export const NewChatInput = ({
  handleSend,
  isChatbotThinking,
}: NewChatInputProps) => {
  const [input, setInput] = useState("");

  return (
    <div className="relative">
      <Textarea
        disabled={isChatbotThinking}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend(input);
            setInput("");
          }
        }}
        placeholder="Ask me anything..."
        className="resize-none pr-16"
      />
      <Button
        disabled={!input}
        size="icon-sm"
        onClick={() => {
          handleSend(input);
          setInput("");
        }}
        className="absolute bottom-2 right-2"
      >
        <Send />
      </Button>
    </div>
  );
};
